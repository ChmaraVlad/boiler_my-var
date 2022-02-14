// Core
import React, { Component, FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { Practice2 } from '../../../components/JavaScriptPractice/Practice2';
import { Practice3 } from '../../../components/JavaScriptPractice/Practice3';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

// const data = [
//     {
//         component: null,
//         id:        1,
//         title:     'Control flow1',
//     },
//     {
//         component: <Practice2/>,
//         id:        2,
//         title:     'Control flow2',
//     },
//     {
//         component: <Practice3/>,
//         id:        3,
//         title:     'Control flow3',
//     },
//     {
//         component: <h1>okokokokoko4</h1>,
//         id:        4,
//         title:     'Control flow4',
//     },
// ];

const Lesson: FC<PropTypes> = () => {
    return (
        <></>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson />
    </ErrorBoundary>
);
