// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice21 } from '../../../components/JavaScriptPractice/Practice21';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson21: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 21 <br />
                Asynchronous programming
            </h1>
            <Practice21/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson21 />
    </ErrorBoundary>
);
