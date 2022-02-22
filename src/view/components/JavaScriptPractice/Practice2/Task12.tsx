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
const array = [2, -1, -3, 15, 0, 4];
*/

export const Task12: FC<PropTypes> = () => {
    useEffect(()=>{
        const array = [ 2, -1, -3, 15, 0, 4 ];
        console.log('Task 12');

        let  res = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[ i ] > 0) {
                res += array[ i ];
            }
        }
        console.log(res);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 12</h3>
            <div>
                Найдите сумму положительных элементов массива.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
