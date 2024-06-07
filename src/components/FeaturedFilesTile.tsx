import Image from "next/image";
import {Download} from "lucide-react";

export default function FeaturedFilesTile({key, size, name, type, url}: any) {
    const id = key;
    const fileSize = size/1024/1024;

    return (
        <div className="flex 2xl:w-[300px] flex-col bg-[#030712] rounded-lg p-4 xl:w-[200px] lg:w-[170px]">
            <div className="h-40 rounded-lg bg-[#1d1e26] relative w-auto flex items-center justify-center">
                {type==="image/png" ? (<Image src={url} width={160} height={160} alt={"File"}  className="mx-auto object-cover rounded-lg overflow-auto h-full w-full "/>):
                    (<Image src="/file.png" width={120} height={120} alt={"File"} className="lg:scale-75 2xl:scale-100" />)}

            </div>
            <div className="flex flex-row justify-between items-start mt-4">
                <div>
                    <h4 className="text-lg font-semibold">{name.substring(0, 18)}</h4>
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-400">{fileSize.toFixed(2)}MB</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <a className="p-2 leading-none rounded font-medium  text-xs uppercase" href={url}><Download color="#fff" /></a>
                </div>
            </div>
        </div>
    )
}
