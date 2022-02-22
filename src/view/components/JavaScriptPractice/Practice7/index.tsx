// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice7/Task1';
import { Task2 } from '../Practice7/Task2';
import { Task3 } from '../Practice7/Task3';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice7: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.FlexWrapper>
                <Task1/>
                <Task2/>
                <Task3/>
            </S.FlexWrapper>
        </S.Container>
    );
};
