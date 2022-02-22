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
                Lesson 13 <br />
                Destructuring <br />
                without practice tasks
            </h1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson13 />
    </ErrorBoundary>
);
