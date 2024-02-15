'use client';

import Typography from "@mui/joy/Typography";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function ReAuth() {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, [router]);

    return (
        <div className='w-full'>
            <Typography level='h1'>
                Минутку...
            </Typography>
        </div>
    );
}