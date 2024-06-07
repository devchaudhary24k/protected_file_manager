import FeaturedFilesTile from "@/components/FeaturedFilesTile";

export default function FeaturedFiles({ filesData }: any) {
    return (
        <div>
            <div className="lg:block hidden">
                <h1 className="text-2xl font-bold mb-4">Recently added</h1>
                <div className="flex gap-5 max-w-6xl">
                    {filesData && filesData.length > 0 ? (
                        filesData.slice(-4).map((file: any) => (
                            <FeaturedFilesTile
                                key={file.id}
                                name={file.fileName}
                                size={file.fileSize}
                                type={file.fileType}
                                url={file.fileUrl}
                            />
                        ))
                    ) : null}
                </div>
            </div>
        </div>
    );
}
