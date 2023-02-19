import { View } from "react-native";
import styled from "styled-components";

import { EdgeInsets } from 'react-native-safe-area-context'
import { COLORS } from "../../utils/colors";
import TranslatedText from "../translated-text/TranslatedText";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";

import { Ionicons } from '@expo/vector-icons';
import Button from "../button/Button";

export const Container = styled(View)<{ insets: EdgeInsets }>`
    padding-top: ${({ insets }) => insets?.top}px;
    background-color: ${COLORS.BLACK_RUSSIAN};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    border-bottom-width: 0.5px;
    border-bottom-color: ${COLORS.DARK_GREY};
`

export const InnerContainer = styled(View)`
    padding: 20px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HeaderText = styled(TranslatedText)`
    ${font(FONT_SIZE.LARGE, FONT_WEIGHT.BOLD)}
    color: ${COLORS.WHITE};
`

export const SideContainer = styled(View)`
    flex: 1;
`

export const BackButton = styled(Ionicons).attrs(props => ({
    name: 'chevron-back',
    size: 24,
    color: props.color ?? COLORS.WHITE
}))``

export const OverrideButton = styled(Button)<{ headerVisible?: boolean; insets?: EdgeInsets }>`
    ${props => !props.headerVisible && `
        position: absolute;
        left: 20px;
        top: ${(props.insets?.top ?? 0 )+ 20}px;
        z-index: 1;
        background-color: ${COLORS.WHITE};
        padding: 5px;
        border-radius: 50px;
    ` }
`
