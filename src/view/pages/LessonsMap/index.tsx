// Core
import React, { FC } from 'react';
import {  Outlet } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const LessonsMap: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>Lessons Map</h1>
            <S.Wrapper>
                <S.NavButton to = 'js'>JavaScript Lessons 1-24</S.NavButton>
                <S.NavButton to = 'react'>React-Redux Lessons 1-8</S.NavButton>
            </S.Wrapper>
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <LessonsMap />
    </ErrorBoundary>
);
