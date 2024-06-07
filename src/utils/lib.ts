import { SessionOptions } from "iron-session";
import {logOut} from "@/actions/auth";

export interface SessionData {
    userId?: string,
    username?: string,
    img?: string,
    isLoggedIn: boolean,
}

export const defaultSessionData: SessionData = {
    isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "AUTH COOKIE",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
}