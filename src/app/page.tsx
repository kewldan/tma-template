import React from "react";
import Typography from "@mui/joy/Typography";
import {authenticator} from "@/lib/Security";
import ReAuth from "@/components/ReAuth";

export default async function Home() {
    const jwt = await authenticator.verifyJWTCookie();

    return jwt ? (
        <main className="flex min-h-screen flex-col items-center justify-between pt-24">
            <Typography level='h1'>
                Hello, {jwt.userId}
            </Typography>
        </main>
    ) : <ReAuth/>;
}
