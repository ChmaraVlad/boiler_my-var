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
const array = [1, 2, 3, 4];
*/

export const Task6: FC<PropTypes> = () => {
    useEffect(()=>{
        const array = [ 1, 2, 3, 4 ];
        console.log('Task 6');

        let res = 0;
        for (let i = 0; i < array.length; i++) {
            let element = array[ i ];
            res += element;
        }
        console.log(res);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 6</h3>
            <div>
                Написать код который посчитает сумму всех элементов в массиве.
                Использовать встроенные методы массивов — нельзя.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
