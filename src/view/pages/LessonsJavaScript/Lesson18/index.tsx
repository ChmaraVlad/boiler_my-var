// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice18 } from '../../../components/JavaScriptPractice/Practice18';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson18: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 18
            </h1>
            <Practice18/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson18 />
    </ErrorBoundary>
);
