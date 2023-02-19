import { View } from "react-native";
import styled from "styled-components";
import TranslatedText from "../../components/translated-text/TranslatedText";
import { COLORS } from "../../utils/colors";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";
import { Ionicons } from '@expo/vector-icons';


export const TopContainer = styled(View)`
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.DARKEST_GREY}; 
    margin-horizontal: 16px;
    padding: 24px 0;        
    padding-bottom: 16px;      
`

export const Title = styled(TranslatedText)`
    ${font(FONT_SIZE.BIG, FONT_WEIGHT.BOLD)}
    color: ${COLORS.WHITE};
`

export const LaunchDate = styled(TranslatedText)`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.BOLD)}
    color: ${COLORS.GREY};
`

export const DescriptionText = styled(TranslatedText)`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.BOLD)}
    color: ${COLORS.BORDER_GREY};
    margin-bottom: 16px;
    font-style: italic;
    line-height: 22px;
    letter-spacing: 0.7px;
`

export const BodyContainer = styled(View)`
    margin-horizontal: 16px;
    margin-top: 16px;
`
