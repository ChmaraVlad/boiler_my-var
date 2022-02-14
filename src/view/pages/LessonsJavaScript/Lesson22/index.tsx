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
                Page: Lesson 22
            </h1>
            <h2>
                Metaprogramming. <br />
                Without practice
            </h2>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson22 />
    </ErrorBoundary>
);
