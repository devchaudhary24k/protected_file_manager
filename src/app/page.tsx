import {getSession} from "@/actions/auth";
import LoginForm from "@/components/LoginForm";
import {redirect} from "next/navigation";

export default async function HomePage() {
  const session = await getSession();
  if (session.isLoggedIn) {
      redirect("/dashboard")
  }
  return(
      <div>
          <LoginForm />
      </div>
  )
}