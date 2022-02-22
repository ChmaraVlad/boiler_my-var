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
    const a = 2;
    const b = 1;
    let result = null;

    if (a + b < 4) {
        result = true;
    } else {
        result = false;
    }

    console.log(result);
*/

export const Task1: FC<PropTypes> = () => {
    useEffect(() => {
        const a = 2;
        const b = 1;
        let result = null;
        a + b < 4 ? result = true : result = false;
        console.log('Task 1');
        console.log(result);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 1</h3>
            <div>
                Перепишите код, заменив оператор `if` на тернарный оператор `?`
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
