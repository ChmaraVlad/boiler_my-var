// Core
import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container, Nav } from './styles';

// Icons


const Main: FC = () => {
    const navigate = useNavigate();

    const handleRedirect = <T, >(path: T) => {
        navigate(path);
    };

    return (
        <Container>
            <Nav>
                <button onClick = { () => handleRedirect<number>(-1) }>Back
                </button>
                <button onClick = { () => handleRedirect<string>('/') }>Home
                </button>
                <button onClick = { () => handleRedirect<string>('lessons') }>Menu
                </button>
            </Nav>
            <Outlet />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
