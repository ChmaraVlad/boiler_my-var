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

const Lesson15: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 15 <br />
                Inheritance part 2 <br />
                All Task with Inheritance in Lesson 14
            </h1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson15 />
    </ErrorBoundary>
);
