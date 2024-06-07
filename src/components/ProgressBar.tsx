export default function ProgressBar({progress = 0}: any) {
    return(
        <div className="bg-gray-400 w-full h-2 mt-3 rounded-full">
            <div className="p-1 bg-blue-900 rounded-full" style={{width: `${progress}%`}}></div>
        </div>
    )
}