// Core
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { Crumb } from '../Main/styles';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const NoMatch: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Crumb to = '/'>
                <FontAwesomeIcon
                    icon = { faHome }
                    size = '2x'
                />
            </Crumb>
            <h1>Page NOT found 404</h1>
            <h2>No Match</h2>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <NoMatch />
    </ErrorBoundary>
);
