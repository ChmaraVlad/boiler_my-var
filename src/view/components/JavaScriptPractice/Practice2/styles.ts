// Core
import styled from 'styled-components';

export const Container = styled.section`
`;

export const TaskWrapper = styled.article`
    max-width:500px;
    margin: 10px auto;
    padding: 10px;
    /* background-color: rgb(44% 50% 56%); */
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;;
    border-radius: 10px;

    h3 {
        margin-bottom: 10px;
    }
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
