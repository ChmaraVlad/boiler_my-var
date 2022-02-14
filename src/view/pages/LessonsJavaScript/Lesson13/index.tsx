// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson13: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 13
            </h1>
            <h2>Destructuring</h2>
            <div>
                without practice tasks
            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson13 />
    </ErrorBoundary>
);
