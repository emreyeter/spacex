import { View } from "react-native"
import styled from "styled-components"
import TranslatedText from "../../components/translated-text/TranslatedText"
import { COLORS } from "../../utils/colors"
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font"

export const TopContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-horizontal: 16px;
    margin-vertical: 8px;
    margin-bottom: 24px;
`

export const LeftContainer = styled(View)`
    border-left-width: 5px;
    border-left-color: red;
    padding-left: 10px;
`

export const HeaderText = styled(TranslatedText)`
    ${font(FONT_SIZE.XLARGE, FONT_WEIGHT.BOLD)}
`

export const DescriptionText = styled(TranslatedText)`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.LIGHT)}
`