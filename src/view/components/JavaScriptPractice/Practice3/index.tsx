// Core
import React, { FC } from 'react';

// Import Tasks
import { Task1 } from './Task1';
import { Task2 } from './Task2';
import { Task3 } from './Task3';
import { Task4 } from './Task4';
import { Task5 } from './Task5';
import { Task6 } from './Task6';
import { Task7 } from './Task7';
import { Task8 } from './Task8';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice3: FC<PropTypes> = () => {
    return (
        <S.FlexWrapper>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6 />
            <Task7 />
            <Task8 />
        </S.FlexWrapper>
    );
};
