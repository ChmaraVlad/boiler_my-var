// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice21/Task1';
import { Task2 } from '../Practice21/Task2';
import { Task3 } from '../Practice21/Task3';
import { Task4 } from '../Practice21/Task4';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice21: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Asynchronous programming
            </h1>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
                <Task3/>
                <Task4/>
            </S.FlexWrapper>
        </S.Container>
    );
};
