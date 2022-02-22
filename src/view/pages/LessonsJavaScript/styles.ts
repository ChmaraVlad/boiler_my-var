// Core
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
    font-size: 18px;
    h1 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    `;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;


export const NavButton = styled(NavLink)`
    max-width: 100%;
    margin: 0 10px;
    margin-bottom: 20px;
    padding: 3px 7px;
    text-decoration: none;
    font-size: 20px;
    color:          black;
    text-align: center;
    border: 1px solid;
    border-radius: 7px;

    &:hover {
        color: blue;
    }
`;


export const NavigationWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;
