import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
import styled from "styled-components";
import TranslatedText from "../../components/translated-text/TranslatedText";
import { shadow } from "../../utils/colors";
import { font, FONT_SIZE, FONT_WEIGHT } from "../../utils/font";



export const CustomCalendar = styled(CalendarList).attrs({
    markingType: "multi-dot",
    disableAllTouchEventsForDisabledDays: true,
    disabledByDefault: true,
    pastScrollRange: 100,
    futureScrollRange: 4,
    hideExtraDays: true,
})``

export const ExplanationContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-vertical: 10px;
    padding-horizontal: 20px;
    background-color: white;
    z-index: 1;
    ${shadow()}
    
`

export const ExplanationItemContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const ExplanationText = styled(TranslatedText)`
    ${font(FONT_SIZE.MEDIUM, FONT_WEIGHT.LIGHT)}
`

export const ExplanationItemShape = styled(View)<{ color: string }>`
    width: 5px;
    height: 20px;
    border-radius: 5px;
    margin-right: 5px;
    background-color: ${(props) => props.color};
`