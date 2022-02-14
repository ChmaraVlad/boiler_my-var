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

const Lesson19: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Page: Lesson 19 <br />
                Symbols and Symbol Properties
            </h1>
            <h2>
                Without practise Tasks
            </h2>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson19 />
    </ErrorBoundary>
);
