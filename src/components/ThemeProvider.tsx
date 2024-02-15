'use client';

import React, {useCallback, useEffect} from "react";
import {useMiniApp, useSettingsButton, useThemeParams} from "@tma.js/sdk-react";
import {on, postEvent} from "@tma.js/sdk";
import {useRouter} from "next/navigation";
import {useColorScheme} from "@mui/joy/styles";

export default function ThemeProvider({children}: { children: React.ReactNode }) {
    const {setMode} = useColorScheme();
    const theme = useThemeParams();
    const miniApp = useMiniApp();

    const handleTheme = useCallback(() => {
        setMode(theme.isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme.isDark ? 'dark' : 'light');

        miniApp.setHeaderColor(theme.isDark ? '#101418' : '#ffffff');
        miniApp.setBackgroundColor(theme.isDark ? '#101418' : '#ffffff');

        if (theme.isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setMode, theme.isDark]);

    useEffect(() => {
        miniApp.setHeaderColor(theme.isDark ? '#101418' : '#ffffff');
        miniApp.setBackgroundColor(theme.isDark ? '#101418' : '#ffffff');
        miniApp.ready();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        return on('theme_changed', handleTheme)
    }, [handleTheme, theme]);

    useEffect(() => {
        postEvent('web_app_request_theme');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            handleTheme();
        }, 500)
    }, [handleTheme]);

    const settingsButton = useSettingsButton();
    const router = useRouter();

    useEffect(() => {
        const handler = () => {
            router.push('/settings');
        }

        settingsButton.show();
        settingsButton.on('click', handler);

        return () => {
            settingsButton.off('click', handler);
            settingsButton.hide();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return children;
}