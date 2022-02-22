// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice7 } from '../../../components/JavaScriptPractice/Practice7';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson7: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson7 <br />
                Improved array capabilities
            </h1>
            <Practice7 />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson7 />
    </ErrorBoundary>
);
