// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice17/Task1';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice17: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Timers and Performance
            </h1>
            <S.FlexWrapper>
                <Task1/>
            </S.FlexWrapper>
        </S.Container>
    );
};
