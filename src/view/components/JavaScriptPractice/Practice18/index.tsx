// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice18/Task1';
import { Task2 } from '../Practice18/Task2';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice18: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Inheritance
            </h1>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
            </S.FlexWrapper>
        </S.Container>
    );
};
