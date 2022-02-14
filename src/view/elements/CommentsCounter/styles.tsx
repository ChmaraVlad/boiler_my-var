import styled from 'styled-components';

export const StyleCommentsCounter = styled.span`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  
    &::before {
        content: '👋';
        display: inline;
        font-size: 13px;
        opacity: 0.6;
    }
`;
