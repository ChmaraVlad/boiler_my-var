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
const array = [2, 5, 9, 15, 0, 4]
*/

export const Task11: FC<PropTypes> = () => {
    useEffect(()=>{
        const array = [ 2, 5, 9, 15, 0, 4 ];
        console.log('Task 11');

        let res = '';
        for (let i = 0; i < array.length; i++) {
            if (array[ i ] > 3 && array[ i ] < 10) {
                res += `\n${array[ i ]}`;
            }
        }
        console.log(res);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 11</h3>
            <div>
                С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
