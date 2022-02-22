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

const Lesson22: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 22 <br />
                Metaprogramming. <br />
                Without practice
            </h1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson22 />
    </ErrorBoundary>
);
