// Core
import React, { FC } from 'react';
import { Task5 } from '../Practice6/Task5';
import { Task1 } from '../Practice6/Task1';
import { Task2 } from '../Practice6/Task2';
import { Task3 } from '../Practice6/Task3';
import { Task4 } from '../Practice6/Task4';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice6: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Get in touch with arrays
            </h1>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
                <Task3/>
                <Task4/>
                <Task5/>
            </S.FlexWrapper>
        </S.Container>
    );
};
