// Core
import React, { FC } from 'react';
import { Task1 } from '../Practice9/Task1';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Practice9: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.FlexWrapper>
                <Task1/>
            </S.FlexWrapper>
        </S.Container>
    );
};
