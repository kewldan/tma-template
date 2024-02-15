'use client';

import React, {type PropsWithChildren} from 'react';
import {DisplayGate, SDKProvider} from "@tma.js/sdk-react";
import {CssVarsProvider} from "@mui/joy/styles";

function SDKProviderError() {
    return (
        <div className='w-full h-full flex flex-row items-center justify-center p-4'><span>Похоже,
            что-то пошло не так, попробуйте закрыть и открыть приложение снова</span>
        </div>
    );
}

function SDKProviderLoading() {
    return <div className='w-full h-full flex flex-row items-center justify-center'><span/></div>;
}

function SDKInitialState() {
    return <div className='w-full h-full flex flex-row items-center justify-center'><span/></div>;
}

export function TelegramProvider({children}: PropsWithChildren) {
    return (
        <CssVarsProvider>
            <SDKProvider options={{async: true, cssVars: true}}>
                <DisplayGate error={SDKProviderError} initial={SDKInitialState} loading={SDKProviderLoading}>
                    {children}
                </DisplayGate>
            </SDKProvider>
        </CssVarsProvider>
    );
}