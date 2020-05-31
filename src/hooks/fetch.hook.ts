import { useState, useEffect } from 'react'
import {IUseFetchOptions} from './hook.type'

const useFetch = (
    fetchPromise: any,
    options: IUseFetchOptions = {},
    initialFetchParams?: any,
) => {

    const {
        dispatchNotificationOnSuccess = true,
        dispatchNotificationOnError = true,
        fireOnMount = true,
    } = options

    const [response, setResponse] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const fetchData = async (params?: any) => {
        setLoading(true)
        try {
            const res = await fetchPromise(params);
            setLoading(false)
            if (!res.ok) {
                const { message } = await res.json();
                setError(message);
                notify(message, 'error');
                return { error: true };
            }
            if (res.status < 600 && res.status >= 200) {
                const { message, ...rest } = await res.json();
                if (message && message !== '' && message.length > 2) {
                    if (res.status < 300) {
                        notify(message, 'success')
                    } else {
                        notify(message, 'error')
                        // return {...rest}
                    }
                }
                //adding date in case rest is empty as it will affect the useEffect to run
                setResponse(rest && Object.keys(rest).length > 0 ? rest : { params, date: new Date().getTime() });
                return { response, error: error }
            }

        } catch (error) {
            setError(error);
            setLoading(false)
            notify('Unknown error, please try later', 'error')
            return { error }
        }
    }

    const notify = (text, variant) => {
        if (variant === 'success' && !dispatchNotificationOnSuccess) return
        if (variant === 'error' && !dispatchNotificationOnError) return
    }


    useEffect(() => {
        if (fireOnMount)
            fetchData(initialFetchParams);
    }, [fireOnMount,initialFetchParams])

    return [response, error, loading, fetchData]
};

export {
    useFetch
}