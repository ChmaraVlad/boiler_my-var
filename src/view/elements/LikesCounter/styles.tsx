import styled from 'styled-components';

export const StyledLikesCounter = styled.span<{clicked: boolean}>`
    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &::before {
        content: "♥";
        display: inline;
        font-size: 16px;
        opacity: 0.6;
        color: ${({ clicked }) => clicked ? 'blue' : 'inherit'};
    }
`;

