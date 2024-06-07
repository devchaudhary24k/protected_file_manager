// import DefaultFileUpload from "@/components/DefaultFileUpload";
// import DefaultFilePreview from "@/components/DefaultFilePreview";
// import FeaturedFiles from "@/components/FeaturedFiles";
// import LogoutForm from "@/components/LogoutForm";
// import { logOut } from "@/actions/auth";
//
// export default function DefaultDashboard({ filesData, uploadBtnClick, progress }: any) {
//     return (
//         <>
//         <div className="grid grid-cols-4 grid-flow-row items-start gap-0 px-10 bg-gray-900 mt-10">
//             <div className="col-span-3">
//                 <FeaturedFiles filesData={filesData}/>
//             </div>
//             <div className="col-span-1">
//                 <DefaultFileUpload uploadBtnClick={uploadBtnClick} progress={progress} />
//             </div>
//             <div className="col-span-3">
//                 <DefaultFilePreview filesData={filesData}/>
//             </div>
//             <div className="col-span-1 mt-5">
//                 <form action={logOut}>
//                     <button className="max-w-[450px] w-full mt-[-70px] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Logout</button>
//                 </form>
//             </div>
//         </div>
//         </>
//     );
// }

import DefaultFileUpload from "@/components/DefaultFileUpload";
import DefaultFilePreview from "@/components/DefaultFilePreview";
import FeaturedFiles from "@/components/FeaturedFiles";
import LogoutForm from "@/components/LogoutForm";
import { logOut } from "@/actions/auth";

export default function DefaultDashboard({ filesData, uploadBtnClick, progress }: any) {
    return (
        <>
            <div className="flex flex-col-reverse justify-between lg:flex-row w-full lg:p-8 p-4 lg:overflow-hidden">
                {/* Left Side */}
                <div className="w-full mt-8 lg:mt-0">
                    <FeaturedFiles filesData={filesData}/>
                    <DefaultFilePreview filesData={filesData}/>
                </div>
                {/* Right Side */}
                <div className="lg:w-3/12 w-full overflow-hidden sticky ">
                    <DefaultFileUpload uploadBtnClick={uploadBtnClick} progress={progress} />
                    <div className="mt-5">
                        <form action={logOut}>
                            <button className="lg:max-w-[450px] w-full  mt-[-70px] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Logout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
