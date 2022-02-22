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
const array = [1, 2, 3, 4, 5, 6]
*/

export const Task8: FC<PropTypes> = () => {
    useEffect(()=>{
        const array = [ 1, 2, 3, 4, 5, 6 ];
        console.log('Task 8');


        let res = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[ i ] % 2 === 0 && array[ i ] > 3) {
                let element = array[ i ];
                res += element;
            }
        }
        console.log(res);
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 8</h3>
            <div>
                Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
