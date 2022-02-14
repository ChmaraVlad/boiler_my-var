import React from 'react';
import { StyleCommentsCounter } from './styles';

const CommentsCounter = ({ comments }: {comments: number}) => {
    return (
        <StyleCommentsCounter>
            {comments}
        </StyleCommentsCounter>
    );
};
export default CommentsCounter;
