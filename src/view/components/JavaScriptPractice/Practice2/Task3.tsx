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
const value = 'c';

switch (value) {
    case 'a':
        console.log('a');
        break;

    case 'b':
    case 'c':
    case 'd':
    case 'e':
        console.log('others');
        break;

    default:
        console.log('unknown');
}
*/

export const Task3: FC<PropTypes> = () => {
    useEffect(()=>{
        let value = 'c';

        console.log('Task 3');
        if (value === 'a') {
            console.log('a');
        } else if (
            value === 'b'
    || value === 'c'
    || value === 'd'
    || value === 'e'
        ) {
            console.log('others');
        } else {
            console.log('unknown');
        }
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 3</h3>
            <div>
                Перепишите код, заменив оператор `switch` на оператор `if..else`
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
