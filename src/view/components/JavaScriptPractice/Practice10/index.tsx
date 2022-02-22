// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice10/Task1';
import { Task2 } from '../Practice10/Task2';
import { Task3 } from '../Practice10/Task3';
import { Task4 } from '../Practice10/Task4';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice10: FC<PropTypes> = () => {
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
