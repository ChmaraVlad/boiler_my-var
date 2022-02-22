// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { Navigation } from '../../components/Navigation';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


const NoMatch: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Navigation />
            <h1>Page NOT found 404</h1>
            <h2>No Match</h2>

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <NoMatch />
    </ErrorBoundary>
);
