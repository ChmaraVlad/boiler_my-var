// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice11 } from '../../../components/JavaScriptPractice/Practice11';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson11: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 11
            </h1>
            <Practice11 />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson11 />
    </ErrorBoundary>
);
