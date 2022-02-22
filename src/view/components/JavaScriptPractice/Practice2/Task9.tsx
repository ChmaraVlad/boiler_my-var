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
const arr = [1, 2, 3, 4, 5, 6]
*/

export const Task9: FC<PropTypes> = () => {
    useEffect(()=>{
        const array = [ 1, 2, 3, 4, 5, 6 ];
        // [6,5,4,3,2,1]
        console.log('Task 9');


        for (let n = 0; n < array.length; n++) {
            for (let i = 0; i < array.length - 1 - n; i++) {
                if (array[ i ] < array[ i + 1 ]) {
                    const buff = array[ i ];
                    array[ i ] = array[ i + 1 ];
                    array[ i + 1 ] = buff;
                }
            }
        }

        console.log(array);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 9</h3>
            <div>
                Отсортируйте массив по убыванию.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
