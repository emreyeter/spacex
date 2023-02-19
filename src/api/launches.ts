import { useQuery } from "@tanstack/react-query"
import api from "./api"
import { LaunchesResponse } from "./response"

export const getLaunchesFn = async () => {
        const response = await api.get<LaunchesResponse>('/launches')
        return response.data
}

export const useGetLaunches = () => {
    return useQuery(['launches'], getLaunchesFn)
}

