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


export const Task2: FC<PropTypes> = () => {
    useEffect(() => {
        function f(...rest: Number[]) {
            let res = 0;
            for (let i = 0; i < rest.length; i++) {
                let param = rest[ i ];
                if (typeof param !== 'number') {
                    throw new Error('all parameters should be a Number type');
                }
                res += param;
            }

            return res;
        }
        console.log('Task 2');
        console.log(f(1, 2, 3)); // 6

        f(1, 1, 1, 1, 1, 1, 1, 1); // 8
        // f(1, 2, 's', 4); // Error: all parameters should be a Number type
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 2</h3>
            <div>
                Создайте функцию `f`, которая возвращает сумму всех параметров.
                <div>
                    Условия:
                    * - Функция принимает любое количество параметров;
                    * - Функция содержит проверку входных параметров на тип number. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </S.TaskWrapper>
    );
};
