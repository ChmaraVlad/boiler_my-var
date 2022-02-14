// Core
import React, { FC } from 'react';
import { useApiLoader } from '../../../tools/hooks/useApiLoader';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Article } from '../../components/Article';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const News: FC<PropTypes> = () => {
    const { db } = useApiLoader();
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
            <div>
                {articleJsx}
            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <News />
    </ErrorBoundary>
);
