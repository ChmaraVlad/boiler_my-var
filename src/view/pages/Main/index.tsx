// Core
import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container, Nav, Breadcrumbs, Crumb } from './styles';

// Icons
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Main: FC = () => {
    return (
        <Container>
            <Nav>
                <Link to = 'register'>Registation</Link>
                <Link to = 'items'>Items</Link>
                <Link to = 'lessons'>Lessons</Link>
            </Nav>
            <Breadcrumbs>
                <Crumb to = '/'>
                    <FontAwesomeIcon
                        icon = { faHome }
                        size = '2x'
                    />
                </Crumb>
            </Breadcrumbs>
            <Outlet />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
