// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice20 } from '../../../components/JavaScriptPractice/Practice20';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson20: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: Lesson 20
            <Practice20 />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson20 />
    </ErrorBoundary>
);
