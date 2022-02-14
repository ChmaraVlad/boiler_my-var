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
const array = [1, 2, 5, 9, 4, 13, 4, 10];
*/

export const Task13: FC<PropTypes> = () => {
    useEffect(()=>{
        const array = [ 1, 2, 5, 9, 4, 13, 4, 10 ];
        console.log('Task 13');

        for (let i = 0; i < array.length; i++) {
            if (array[ i ] === 4) {
                console.log('Есть!');
                break;
            }
        }
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 13</h3>
            <div>
                С помощью цикла `for` и оператора `if` проверьте есть ли в массиве элемент со значением, равным 4. Если есть — выведите на экран `Есть!` и выйдите из цикла. Если нет - ничего делать не надо.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
