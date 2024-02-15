'use client';

import React, {useEffect} from "react";
import {useBackButton} from "@tma.js/sdk-react";
import {useRouter} from "next/navigation";

export default function BackButton({path}: { path: string | null }) {
    const backButton = useBackButton();
    const router = useRouter();

    useEffect(() => {
        backButton.show();

        const handler = () => {
            if (path) {
                router.push(path);
            } else {
                router.back();
            }
        }

        backButton.on('click', handler);

        return () => {
            backButton.off('click', handler);
            backButton.hide();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, router]);

    return <></>
}