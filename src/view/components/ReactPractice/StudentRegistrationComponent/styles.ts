// Core
import styled from 'styled-components';

export const Container = styled.section`
`;
export const Form = styled.form`
max-width: 500px;
margin: 0 auto;

input:not(input[type ='radio']) {
    display: inline-block;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
    border: 2px solid;
}
input[type ='submit'] {
    display: inline-block;
    background-color: rgb(0, 255, 50, .5);
    height: 40px;
}
`;

export const ErrorMsg = styled.p`
color: red;
text-align: center;
font-weight: bold;
`;
