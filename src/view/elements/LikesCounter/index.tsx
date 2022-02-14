import React from 'react';
import { StyledLikesCounter } from './styles';

type TypeProps = {
    clicked: boolean;
    likes: number;
    click: () => void;
}

const LikesCounter = ({ likes, click, clicked }: TypeProps) => {
    return (
        <StyledLikesCounter
            clicked = { clicked ? clicked : false }
            onClick = { click }>
            {likes}
        </StyledLikesCounter>
    );
};

export default LikesCounter;
