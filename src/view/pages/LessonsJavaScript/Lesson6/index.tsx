// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice6 } from '../../../components/JavaScriptPractice/Practice6';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson6: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Lesson 6 <br />
                Getting in touch with arrays
            </h1>
            <div>
                <Practice6/>
            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson6 />
    </ErrorBoundary>
);
