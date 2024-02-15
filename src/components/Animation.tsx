'use client';

import Lottie, {LottieComponentProps} from "lottie-react";
import React from "react";

export default function Animation(params: LottieComponentProps) {
    return (
        <Lottie loop={true} {...params}/>
    )
}