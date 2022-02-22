// Core
import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    /* padding-top: 20px; */
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    max-width: 250px;
    margin: 0 auto;
    /* padding: 10px; */
    button {
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: #aeaeae;
        }
    }
`;
