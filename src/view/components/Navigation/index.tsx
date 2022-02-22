// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Navigation: FC<PropTypes> = () => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <S.Container>
            <button onClick = { () => handleRedirect<number>(-1) }>Back
            </button>
            <button onClick = { () => handleRedirect<string>('/') }>Home
            </button>
            <button onClick = { () => handleRedirect<string>('/lessons') }>Menu
            </button>
        </S.Container>
    );
};
