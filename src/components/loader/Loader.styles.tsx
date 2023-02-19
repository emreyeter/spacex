import { View } from "react-native";
import styled from "styled-components";
import LottieView from 'lottie-react-native';

export const Container = styled(View)<{ isLoading: boolean }>`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    display: ${(props) => props.isLoading ? 'flex' : 'none'};
`

export const Lottie = styled(LottieView)`
    width: 128px;
    height: 128px;
    background-color:  transparent;
`

export const LottieCircleView = styled(View)`
    width: 128px;
    height: 128px;
    border-radius: 64px;
    background-color: rgba(255,255,255, 1);
    position: absolute;
`