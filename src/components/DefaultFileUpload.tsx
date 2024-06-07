// import { useState } from "react";
// import FilePreview from "@/components/FilePreview";
// import ProgressBar from "@/components/ProgressBar";
//
// export default function DefaultFileUpload({ uploadBtnClick, progress }: any) {
//     const [file, setFile] = useState<File | null>();
//
//     return (
//         <div className="flex flex-col gap-5 ">
//             <div className="flex items-center justify-center w-full">
//                 <label htmlFor="dropzone-file"
//                        className="flex flex-col items-center justify-center w-[530px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//                     <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                         <svg
//                             className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
//                             aria-hidden="true"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 20 16"
//                         >
//                             <path
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
//                             />
//                         </svg>
//                         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                     </div>
//                     <input
//                         onChange={(e) => {
//                             const uploadedFile = e.target.files && e.target.files[0];
//                             if (uploadedFile) {
//                                 setFile(uploadedFile);
//                             }
//                         }}
//                         id="dropzone-file"
//                         type="file"
//                         className="hidden" />
//                 </label>
//             </div>
//
//             {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
//             <div className="flex items-center justify-center w-full gap-5">
//                 <button disabled={!file} onClick={() => uploadBtnClick(file)}
//                         className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload
//                 </button>
//             </div>
//             {progress > 0 && progress < 100 ? <ProgressBar progress={progress} /> : null}
//         </div>
//     );
// }

import { useState, useEffect } from "react";
import FilePreview from "@/components/FilePreview";
import ProgressBar from "@/components/ProgressBar";

export default function DefaultFileUpload({ uploadBtnClick, progress }: any) {
    const [file, setFile] = useState<File | null>();

    useEffect(() => {
        if (progress === 100) {
            // Refresh the page 1 second after upload is complete
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }, [progress]);

    return (
        <div className="flex flex-col gap-5 ">
            <div className="flex items-center justify-center w-full lg:scale-y-100 scale-y-90">
                <label htmlFor="dropzone-file"
                       className="flex flex-col items-center justify-center w-full lg:w-[530px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    </div>
                    <input
                        onChange={(e) => {
                            const uploadedFile = e.target.files && e.target.files[0];
                            if (uploadedFile) {
                                setFile(uploadedFile);
                            }
                        }}
                        id="dropzone-file"
                        type="file"
                        className="hidden" />
                </label>
            </div>

            {file ? <FilePreview file={file} removeFile={() => setFile(null)} /> : null}
            <div className="flex items-center justify-center w-full gap-5">
                <button disabled={!file} onClick={() => uploadBtnClick(file)}
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Upload
                </button>
            </div>
            {progress > 0 && progress < 100 ? <ProgressBar progress={progress} /> : null}
        </div>
    );
}

