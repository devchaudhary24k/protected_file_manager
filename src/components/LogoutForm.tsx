import {logOut} from "@/actions/auth";

export default function LogoutForm() {
    return(
        <div>
            <form action={logOut}>
                <button className="w-[250px] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Logout</button>
            </form>
        </div>
    )
}