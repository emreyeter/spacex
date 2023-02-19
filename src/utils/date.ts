import moment from "moment"


export const unixToDate = (dateUnix: number) => 
    moment(dateUnix * 1000).format('YYYY-MM-DD')
