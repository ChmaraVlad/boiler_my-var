// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice5 } from '../../../components/JavaScriptPractice/Practice5';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson5: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 5
            </h1>
            <Practice5/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson5 />
    </ErrorBoundary>
);
