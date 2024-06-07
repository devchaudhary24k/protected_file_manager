import {getSession} from "@/actions/auth";
import {redirect} from "next/navigation";
import FirstUpload from "@/components/Upload";

export default async function Dashboard() {
    const session = await getSession();
    if (!session.isLoggedIn) {
        redirect("/")
    }

    return(
        <div className="bg-gray-900 min-h-screen">
            <FirstUpload/>
        </div>

    )
}