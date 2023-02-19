import { LaunchItem } from "../api/response";
import { FLIGHT_STATUS, FLIGHT_STATUS_URI } from "../types/constants";

export const getLaunchStatus = (item : LaunchItem) => {

    if (item.upcoming) {
        return FLIGHT_STATUS.UPCOMING
    }

    if (item.success) {
        return FLIGHT_STATUS.SUCCESS
    }

    return FLIGHT_STATUS.FAILED

}

export const getURIByStatus = (status: FLIGHT_STATUS) => {
    switch (status) {
        case FLIGHT_STATUS.UPCOMING:
            return FLIGHT_STATUS_URI.UPCOMING
        case FLIGHT_STATUS.SUCCESS:
            return FLIGHT_STATUS_URI.SUCCESS
        case FLIGHT_STATUS.FAILED:
            return FLIGHT_STATUS_URI.FAILED
        default:
            return FLIGHT_STATUS_URI.UPCOMING
    }
}
