import moment from "moment"
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking"
import { MarkedDates } from "react-native-calendars/src/types"
import { LaunchesResponse } from "../api/response"
import { COLORS } from "./colors"
import { unixToDate } from "./date"

export const markDates = (data : LaunchesResponse) => {
    const markedDates: MarkedDates  = data?.reduce((acc: any, item) => {

    const date = unixToDate(item.date_unix)

    const markingDots = acc[date]?.dots || []

    markingDots.push({
        key : item.id,
        color : item.upcoming ? COLORS.DOLPHIN :  
                item.success ? COLORS.SUCCESS : COLORS.ERROR,
    })

    const markingProps : MarkingProps = {
        disabled: false,
        dots: markingDots
    }

    acc[date] = markingProps
    return acc
    }, {})

    return markedDates
}