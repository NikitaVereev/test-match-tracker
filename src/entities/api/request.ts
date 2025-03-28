import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import instance from './interceptors.ts'

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => response.data
	const onError = (error: AxiosError) => {
		console.log('error', error)
		return Promise.reject(error)
	}
	return instance(config).then(onSuccess).catch(onError)
}
