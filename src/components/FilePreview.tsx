import { X } from "lucide-react"
import Image from "next/image";

export default function FilePreview({file, removeFile}: {file: any, removeFile: any}) {
    return(
        <div className="flex items-center justify-between gap-2 mt-5 border rounded-md p-2 border-blue-200">
            <div className="flex items-center p-2 gap-2">
                <Image src={"/file.png"} width={40} height={40} alt={"File Logo"}/>
                <div className="text-left">
                    <h2>{file.name}</h2>
                    <h2 className="text-[12px] text-gray-400">{file?.type} / {(file.size/1024/1024).toFixed(2)}MB</h2>
                </div>
            </div>
            <X className="text-red-500 cursor-pointer"  onClick={()=> removeFile()} />
        </div>
    )
}