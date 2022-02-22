// Core
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Navigation } from '../../components/Navigation';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const lessons = [
    {
        id:   '1',
        name: 'lesson 1',
    },
    {
        id:   '2',
        name: 'lesson 2',
    },
    {
        id:   '3',
        name: 'lesson 3',
    },
    {
        id:   '4',
        name: 'lesson 4',
    },
    {
        id:   '5',
        name: 'lesson 5',
    },
    {
        id:   '6',
        name: 'lesson 6',
    },
    {
        id:   '7',
        name: 'lesson 7',
    },
    {
        id:   '8',
        name: 'lesson 8',
    },
    {
        id:   '9',
        name: 'lesson 9',
    },
    {
        id:   '10',
        name: 'lesson 10',
    },
    {
        id:   '11',
        name: 'lesson 11',
    },
    {
        id:   '12',
        name: 'lesson 12',
    },
    {
        id:   '13',
        name: 'lesson 13',
    },
    {
        id:   '14',
        name: 'lesson 14',
    },
    {
        id:   '15',
        name: 'lesson 15',
    },
    {
        id:   '16',
        name: 'lesson 16',
    },
    {
        id:   '17',
        name: 'lesson 17',
    },
    {
        id:   '18',
        name: 'lesson 18',
    },
    {
        id:   '19',
        name: 'lesson 19',
    },
    {
        id:   '20',
        name: 'lesson 20',
    },
    {
        id:   '21',
        name: 'lesson 21',
    },
    {
        id:   '22',
        name: 'lesson 22',
    },
];

const LessonsJavaScript: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Navigation />
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
        <LessonsJavaScript />
    </ErrorBoundary>
);
