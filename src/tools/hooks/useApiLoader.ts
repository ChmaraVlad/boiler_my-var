import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const useApiLoader = () => {
    const [ db, setDb ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(true);
    const [ isServerError, setIsServerError ] = useState(false);
    const [ isClientError, setIsClientError ] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                const response = await api.news.fetch();


                if (response.ok) {
                    const data = await response.json();
                    if (data.status === 'ok') {
                        setIsFetching(false);
                        setDb(data.articles);
                    }
                } else if (response.ok === false) {
                    if (response.status >= 400 && response.status < 500) {
                        setIsClientError(true);
                        setIsFetching(false);
                    }
                }
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error);
                    setIsServerError(true);
                    setIsFetching(false);
                }
            }
        })();
    }, []);


    return {
        db,
        isFetching,
        isServerError,
        isClientError,
    };
};
