// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice20/Task1';
import { Task2 } from '../Practice20/Task2';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice20: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Iterators and generators
            </h1>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
            </S.FlexWrapper>
        </S.Container>
    );
};
