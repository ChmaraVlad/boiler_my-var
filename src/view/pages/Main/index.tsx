// Core
import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container, Nav } from './styles';

// Icons


const Main: FC = () => {
    let navigate = useNavigate();

    const linkToLessons = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault;
        navigate('lessons');
    };
    const linkToBackPage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault;
        navigate(-1);
    };
    const linkToHome = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault;
        navigate('/');
    };

    // React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    return (
        <Container>
            <Nav>
                <button onClick = { linkToBackPage }>Back
                </button>
                <button onClick = { linkToHome }>Home
                </button>
                <button onClick = { linkToLessons }>Menu
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
