// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice8 } from '../../../components/JavaScriptPractice/Practice8';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson8: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Error Handling and debugging
            </h1>
            <Practice8/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson8 />
    </ErrorBoundary>
);
