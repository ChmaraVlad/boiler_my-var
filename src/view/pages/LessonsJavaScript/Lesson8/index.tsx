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

const Lesson8: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 8 <br />
                Error Handling and debugging <br />
                Without practice Tasks
            </h1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson8 />
    </ErrorBoundary>
);
