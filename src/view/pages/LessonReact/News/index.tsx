// Core
import React, { FC } from 'react';
import { useApiLoader } from '../../../../tools/hooks/useApiLoader';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Article } from '../../../components/Article';
import { Spinner } from '../../../elements';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const News: FC<PropTypes> = () => {
    const { db, isFetching, isServerError, isClientError } = useApiLoader();
    db.length = 5;

    const articleJsx = db.map((item, index) => {
        return (
            <Article
                key = { index }
                { ...item }
            />
        );
    });

    return (
        <S.Container>
            <h1>Page: News</h1>
            {
                isFetching
                    ? (<><h1>Is Loading</h1><Spinner/></>)
                    : null
            }
            <div>
                {
                    !isServerError
                        ? articleJsx
                        : <h1>Сервер не отвечает</h1>
                }
                {
                    isClientError
                        ? <h1>Сервер не отвечает</h1>
                        : null
                }
            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <News />
    </ErrorBoundary>
);
