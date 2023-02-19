
import {
    QueryClient,
  } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { setError } from '../store/slices/commonSlice'

export const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      onError : (error) => {
        setError((error as AxiosError).message)
      }
    }
  }
})