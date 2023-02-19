import { BlurView } from "expo-blur";
import { ImageBackground, Image, View } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";
import TranslatedText from "../translated-text/TranslatedText";
import { AntDesign } from '@expo/vector-icons';

export const Container = styled(ImageBackground)`
    margin-horizontal: 16px;
    margin-bottom: 8px;
    height: 170px;
    flex-direction: row;
`

export const LaunchLogo = styled(Image).attrs({
    resizeMode: 'contain'
})`
    height: 64px;
    width: 64px;
    margin-left: 8px;
    margin-top: 8px;
`

export const DescriptionContainer = styled(BlurView).attrs({
    intensity: 32
})`
    position: absolute;
    height: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: row;
    padding-horizontal: 16px;
    justify-content: space-between;
    align-items: center;
`

export const DescriptionLeftContainer = styled(View)``
export const DescriptionRightContainer = styled(View)`
    flex-direction: row;
    align-items: center;
`


export const LaunchStatusText = styled(TranslatedText)`
    ${font(FONT_SIZE.BIG, FONT_WEIGHT.REGULAR)}
    color: ${COLORS.WHITE};
`

export const LaunchDateText = styled(TranslatedText)`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.LIGHT)}
    color: ${COLORS.WHITE_LIGHTER};
`

export const PlayIcon = styled(AntDesign).attrs({
    name: 'play',
    size: 24,
    color: COLORS.WHITE
})``

export const YoutubeIconContainer = styled(View)`
    align-items: center;
    margin-right: 8px;
`

export const YoutubeIcon = styled(AntDesign).attrs({
    name: 'youtube',
    size: 24,
    color: COLORS.RED
})``

export const YoutubeIconText = styled(TranslatedText)`
    ${font(FONT_SIZE.SMALL, FONT_WEIGHT.BOLD)}
    color: ${COLORS.RED};
`
export const LaunchNameContainer = styled(View)`
    position: absolute;
    right: 0;
    top: 0;
    background-color: ${COLORS.WHITE};
    padding-left: 4px;
    padding-bottom: 4px;
    border-bottom-left-radius: 8px;
`

export const LaunchNameInnerContainer = styled(View) `
    padding-horizontal: 16px;
    padding-vertical: 8px;
    background-color: ${COLORS.DARKER_GREY};
    border-bottom-left-radius: 6px;
`

export const LaunchNameText = styled(TranslatedText)`
    ${font(FONT_SIZE.SMALL, FONT_WEIGHT.BOLD)}
    color: ${COLORS.WHITE};
    
`