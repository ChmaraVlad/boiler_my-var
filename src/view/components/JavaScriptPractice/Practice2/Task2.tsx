/* eslint-disable no-nested-ternary */
// Core
import React, { FC, useEffect } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

/*
Task
var message;

if (login == 'Pitter') {
  message = 'Hi';
} else if (login == 'Owner') {
  message = 'Hello';
} else if (login == '') {
  message = 'unknown';
} else {
  message = '';
}
*/

export const Task2: FC<PropTypes> = () => {
    useEffect(() => {
        let message = '';

        let login = 'Pitter';
        // let login = 'Owner'
        // let login = login == ''
        // let login = ''


        login === 'Pitter'
            ? message = 'Hi'
            : login === 'Owner'
                ? message = 'Hello'
                : login === ''
                    ? message = 'unknown'
                    : message = '';

        console.log('Task 2');
        console.log(message);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 2</h3>
            <div>
                Перепишите `if..else` с использованием нескольких операторов `?`.
                <p>
                    Результат проверки выводиться в консоли.Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
