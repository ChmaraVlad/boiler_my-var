// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice3 } from '../../../components/JavaScriptPractice/Practice3';

// Styles
import * as S from '../styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson3: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 3 <br />
                Getting in touch with functions
            </h1>
            <h2>

            </h2>
            <Practice3 />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson3 />
    </ErrorBoundary>
);
