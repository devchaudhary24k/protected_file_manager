import { Trash2 } from "lucide-react";
import Image from "next/image"
import { Download } from "lucide-react";
import { deleteDoc, doc, getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { app } from "@/firebase";
import { useState } from "react";

export default function DefaultFilePreview({ filesData }: any) {

    const storage = getStorage(app);
    const db = getFirestore(app);
    const [files, setFiles] = useState(filesData);

    const del = async (id: string) => {
        await deleteDoc(doc(db, "files", id));
        window.location.reload();
    };

    return (
        <div className="lg:w-[90%] w-full lg:mt-8 mb-5 lg:mb-0">
            <div>
                <h1 className="text-2xl font-bold mb-4">Files</h1>
            </div>
            <div className="flex flex-col gap-3 lg:h-[500px] h-[450px] overflow-y-auto hide-scrollbar">
                {files && files.length > 0 ? (
                    files.map((file: any) => (
                        // Whole Wrapper
                        <div key={file.id} className="bg-gray-950 rounded-lg flex justify-between px-4">
                            {/* Div with Image and Text */}
                            <div className="flex flex-row items-center h-24 gap-3">
                                <Image src="/file.png" alt="file" width={50} height={50} />
                                <div>
                                    <h4 className="text-lg font-semibold">{file.fileName.substring(0, 25)}</h4>
                                    <div className="flex gap-3">
                                        <p className="text-sm">{file.fileType}</p>
                                        <p className="text-sm text-gray-400">{(file.fileSize / 1024 / 1024).toFixed(2)}MB</p>
                                    </div>
                                </div>
                            </div>

                            {/* Div with download and delete */}
                            <div className="right-0 flex justify-between items-center gap-2">
                                <a className="p-2 leading-none rounded font-medium text-xs uppercase" href={file.fileUrl}><Download color="#fff" /></a>
                                <button className="p-2 leading-none rounded font-medium text-xs uppercase" onClick={() => del(file.id)}><Trash2 color="#fff" /></button>
                            </div>
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    )
}
