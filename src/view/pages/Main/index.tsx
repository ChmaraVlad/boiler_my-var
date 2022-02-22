// Core
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';
import { Navigation } from '../../components/Navigation';

// Styles
import { Container } from './styles';

// Icons

const Main: FC = () => {
    return (
        <Container>
            <Navigation />
            <h1>
                Welcome to Home Page
            </h1>
            <Outlet />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
