// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice14 } from '../../../components/JavaScriptPractice/Practice14';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson14: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 14
            </h1>
            <Practice14/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson14 />
    </ErrorBoundary>
);
