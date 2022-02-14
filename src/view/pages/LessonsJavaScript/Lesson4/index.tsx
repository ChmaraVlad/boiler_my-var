// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice4 } from '../../../components/JavaScriptPractice/Practice4';

// Styles
import * as S from '../styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson4: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>Page: Lesson 4</h1>
            <h2>
                Getting in touch with objects
            </h2>
            <Practice4 />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson4 />
    </ErrorBoundary>
);
