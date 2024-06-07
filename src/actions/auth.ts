"use server";

import { defaultSessionData, SessionData, sessionOptions } from "@/utils/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const username = process.env.AUTH_USERNAME;
const password = process.env.AUTH_PASSWORD;

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSessionData.isLoggedIn;
    }
    return session;
};

export const logIn = async (prevState: { error: undefined | string }, formData: FormData) => {
    const session = await getSession();
    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    if (formUsername !== username && formPassword !== password) {
        return { error: "invalid username or password" };
    }

    session.userId = "1";
    session.username = formUsername;
    session.isLoggedIn = true;

    await session.save();
    redirect("/dashboard");
};

export const logOut = async (): Promise<void> => {
    const session = await getSession();
    session.destroy();
    redirect("/");
};