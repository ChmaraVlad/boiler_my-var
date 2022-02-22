// Core
import React, { FC } from 'react';
import { Task1 } from './Task1';
import { Task2 } from './Task2';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice4: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
            </S.FlexWrapper>
        </S.Container>
    );
};
