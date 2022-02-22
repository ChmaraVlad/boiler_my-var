// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


const NoMatch: FC<PropTypes> = () => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <S.Container>
            <h1>Page NOT found 404</h1>
            <h2>No Match</h2>
            <button onClick = { () => handleRedirect<string>('/') }>
                Home
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <NoMatch />
    </ErrorBoundary>
);
