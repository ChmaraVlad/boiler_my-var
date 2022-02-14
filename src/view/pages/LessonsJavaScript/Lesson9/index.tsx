// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice9 } from '../../../components/JavaScriptPractice/Practice9';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson9: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Improved objects capabilities
            </h1>
            <Practice9 />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson9 />
    </ErrorBoundary>
);
