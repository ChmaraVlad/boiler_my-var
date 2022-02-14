// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice17 } from '../../../components/JavaScriptPractice/Practice17';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson17: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 17
            </h1>
            <Practice17/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson17 />
    </ErrorBoundary>
);
