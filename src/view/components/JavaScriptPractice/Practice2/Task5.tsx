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
for (var i = 0; i < 3; i++) {
    console.log('номер ' + i + '!');
}
*/

export const Task5: FC<PropTypes> = () => {
    useEffect(()=>{
        let i = 0;
        console.log('Task 5');

        while (i < 3) {
            console.log('номер ' + i + '!');
            i++;
        }
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 5</h3>
            <div>
                Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
