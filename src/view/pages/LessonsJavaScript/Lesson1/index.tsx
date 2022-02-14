// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';

// Styles
import * as S from '../styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson1: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>Lesson1</h1>
            <h2>
                Variables, data types, logical operators and arithmetics
            </h2>
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson1 />
    </ErrorBoundary>
);
