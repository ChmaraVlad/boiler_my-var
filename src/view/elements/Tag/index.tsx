import React from 'react';
import { StyledTag } from './styles';

type TypeProps = {
    source: string;
}

const Tag = ({ source }: TypeProps) => {
    return (
        <StyledTag>
            <span className = 'tag'>{source}</span>
        </StyledTag>
    );
};
export default Tag;
