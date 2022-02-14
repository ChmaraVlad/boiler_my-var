import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const useApiLoader = () => {
    const [ db, setDb ] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await api.news.fetch();
            const data = await response.json();
            if (data.status === 'ok') {
                setDb(data.articles);
            }
        })();
    }, []);


    return {
        db,
    };
};
