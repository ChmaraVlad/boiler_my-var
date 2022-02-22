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
                Lesson 19 <br />
                Symbols and Symbol Properties <br />
                Without practise Tasks
            </h1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson19 />
    </ErrorBoundary>
);
