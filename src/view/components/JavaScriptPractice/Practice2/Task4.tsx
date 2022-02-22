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
const value = 0;

if (value === 0) {
    console.log(0);
}
if (value === 1) {
    console.log(1);
}
if (value === 2 || value === 3) {
    console.log('2,3');
}
*/

export const Task4: FC<PropTypes> = () => {
    useEffect(()=>{
        let value = 0;

        console.log('Task 4');
        switch (value) {
            case 0:
                console.log(0);
                break;
            case 1:
                console.log(1);
                break;
            case 2:
            case 3:
                console.log('2,3');
                break;
            default:
                console.log('default');
        }
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 4</h3>
            <div>
                Перепишите код с использованием одной конструкции `switch`
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
