// Core
import React, { FC, useState } from 'react';
import CommentsCounter from '../../elements/CommentsCounter';
import LikesCounter from '../../elements/LikesCounter';
import Tag from '../../elements/Tag';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
    urlToImage: string;
    tags: string[];
    title: string;
    content: string;
    publishedAt: string;
    comments: number ;
    likes: number ;
}


export const Article: FC<PropTypes> = (props) => {
    const {
        urlToImage,
        tags = [ 'some Tag', 'some Tag' ],
        title,
        content,
        publishedAt,
        comments = 99,
        likes = 15,
    } = props;

    const [ getLikes, setLikes ] = useState(likes);
    const [ clicked, setClicked ] = useState(false);

    const _handleLikes = () => {
        if (!clicked) {
            setLikes((prev: number) => prev + 1);
            setClicked((prev: boolean) => !prev);
        } else {
            setLikes((prev: number) => prev - 1);
            setClicked((prev: boolean) => !prev);
        }
    };

    const tagJsx = tags.map((tag: string, index: number) => {
        return (
            <Tag
                key = { index }
                source = { tag }
            />
        );
    });

    return (
        <S.Container>
            <S.Header>
                <div className = 'poster'>
                    <img
                        alt = 'img'
                        src = { urlToImage }
                    />
                </div>
                <div className = 'tags'>
                    {tagJsx}
                </div>
            </S.Header>
            <article>
                <h1>{title}</h1>
                <p>{content}</p>
            </article>
            <footer>
                <span>{publishedAt}</span>
                <div className = 'controls'>
                    <CommentsCounter comments = { comments } />
                    <LikesCounter
                        click = { _handleLikes }
                        clicked = { clicked === true ? clicked : false }
                        likes = { getLikes }
                    />
                </div>
            </footer>
        </S.Container>
    );
};
