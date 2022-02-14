// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Tasks
import { Task1 } from './Task1';
import { Task10 } from './Task10';
import { Task11 } from './Task11';
import { Task12 } from './Task12';
import { Task13 } from './Task13';
import { Task14 } from './Task14';
import { Task2 } from './Task2';
import { Task3 } from './Task3';
import { Task4 } from './Task4';
import { Task5 } from './Task5';
import { Task6 } from './Task6';
import { Task7 } from './Task7';
import { Task8 } from './Task8';
import { Task9 } from './Task9';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice2: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.FlexWrapper>
                <Task1 />
                <Task2 />
                <Task3 />
                <Task4 />
                <Task5 />
                <Task6 />
                <Task7 />
                <Task8 />
                <Task9 />
                <Task10 />
                <Task11 />
                <Task12 />
                <Task13 />
                <Task14 />
            </S.FlexWrapper>
        </S.Container>
    );
};
