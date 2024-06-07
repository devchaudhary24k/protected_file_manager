"use client"
import UploadForm from "@/components/UploadForm";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "@firebase/storage";
import { app } from "@/firebase";
import { useState, useEffect } from "react";
import { doc, getFirestore, collection, setDoc, query, getDocs } from "@firebase/firestore";
import DefaultDashboard from "@/components/DefaultDashboard";

export default function FirstUpload() {
    const [progress, setProgress] = useState<number>();
    const [loading, setLoading] = useState<boolean>(true);
    const [filesData, setFilesData] = useState<any[]>([]);
    const [uploadComplete, setUploadComplete] = useState<boolean>(false); // New state

    const storage = getStorage(app);
    const db = getFirestore(app);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "files"));
                const querySnapshot = await getDocs(q);
                const data: any[] = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                });
                setFilesData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [uploadComplete]); // Fetch data whenever upload completes

    const uploadFile = (file: any) => {
        const metadata = {
            contentType: file.type,
        };
        const spaceRef = ref(storage, "files/" + file?.name);
        const uploadTask = uploadBytesResumable(spaceRef, file, metadata);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setProgress(progress);
                if (progress === 100) { // Check if upload is complete
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log("file available at", downloadURL)
                        saveInfo(file, downloadURL);
                    });
                }
            },
        );
    };

    const saveInfo = async (file: any, downloadURL: any) => {
        const docId = Date.now().toString();
        await setDoc(doc(db, "files", docId), {
            fileName: file.name,
            fileSize: file.size,
            fileType: file.type,
            fileUrl: downloadURL,
        });
        setUploadComplete(true); // Set upload complete state to trigger re-render
    };

    return (
        <>
            {loading ? (
                <>
                    <div className="h-screen flex flex-col items-center justify-center relative gap-5">
                        <h1>Loading...</h1>
                    </div>
                </>
            ) : filesData.length > 0 ? (
                <>
                    <div className=" flex flex-col items-center relative gap-5 top-0 bg-gray-900 min-h-screen">
                        <DefaultDashboard filesData={filesData} uploadBtnClick={(file: any) => uploadFile(file)} progress={progress} />
                    </div>
                </>
            ) : (
                <>
                    <div className="h-screen w-screen flex flex-col items-center justify-center relative  md:gap-5">
                        <h1 className="md:text-2xl text-xl  font-medium">Make your first upload today.</h1>
                        <UploadForm uploadBtnClick={(file: any) => uploadFile(file)} progress={progress} />
                    </div>
                </>
            )}
        </>
    );
}
