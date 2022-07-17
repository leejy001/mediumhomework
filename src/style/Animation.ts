import { keyframes } from "styled-components";

export const pulse = keyframes`
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`

export const move = keyframes`
    0% {
        left: -10px;
    }
    100% {
        left: 0px;
    }
`

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(50px);
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
`

export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(-50px);
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
`

export const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`

export const fadeInRight = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateX(-50px);
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`

export const slideInDown = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
`