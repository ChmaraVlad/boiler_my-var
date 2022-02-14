// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const lessons = [
    {
        id:   '1',
        name: 'React lesson 1',
    },
    {
        id:   '2',
        name: 'React lesson 2',
    },
    {
        id:   '3',
        name: 'React lesson 3',
    },
    {
        id:   '4',
        name: 'React lesson 4',
    },
    {
        id:   '5',
        name: 'React lesson 5',
    },
    {
        id:   '6',
        name: 'React lesson 6',
    },
    {
        id:   '7',
        name: 'React lesson 7',
    },
    {
        id:   '8',
        name: 'React lesson 8',
    },
];

const LessonReact: FC<PropTypes> = () => {
    return (
        <S.Container>

            <h1>Lessons</h1>
            <S.NavigationWrapper>
                {
                    lessons.map(
                        (item) => (
                            <S.NavButton
                                key = { item.id }
                                to = { item.id }>
                                {item.name}
                            </S.NavButton>
                        ),
                    )
                }
            </S.NavigationWrapper>
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <LessonReact />
    </ErrorBoundary>
);
