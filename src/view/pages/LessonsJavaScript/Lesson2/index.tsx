// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice2 } from '../../../components/JavaScriptPractice/Practice2';

// Styles
import * as S from '../styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson2: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson2 <br />
                Control flow
            </h1>
            <Practice2 />
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson2 />
    </ErrorBoundary>
);
