// Core
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    padding: 20px 10px;
    & > * {
        margin: 0 0 20px 0;
    }
    h1 {
        font-size: 30px;
    }
`;

export const NavButton = styled(Link)`
    color: inherit;
    font-size: 20px;
    text-decoration: none;
    &:not(:last-child) {
        margin: 0 20px 0 0 ;
    }
    &:hover {
        color: blue;
    }
`;

export const Wrapper = styled.section`
    display: flex;
`;
