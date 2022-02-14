// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice16 } from '../../../components/JavaScriptPractice/Practice16';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson16: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 16
            </h1>
            <Practice16/>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson16 />
    </ErrorBoundary>
);
