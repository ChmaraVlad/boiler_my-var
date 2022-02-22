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

const Lesson12: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson12 <br />
                Modules <br />
                Without practice tasks
            </h1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson12 />
    </ErrorBoundary>
);
