// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice5/Task1';
import { Task2 } from '../Practice5/Task2';
import { Task3 } from '../Practice5/Task3';
import { Task4 } from '../Practice5/Task4';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice5: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
                <Task3/>
                <Task4/>
            </S.FlexWrapper>
        </S.Container>
    );
};
