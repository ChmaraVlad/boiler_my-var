// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice10 } from '../../../components/JavaScriptPractice/Practice10';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson10: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 10 <br />
                Improved functions capabilities
            </h1>
            <Practice10/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson10 />
    </ErrorBoundary>
);
