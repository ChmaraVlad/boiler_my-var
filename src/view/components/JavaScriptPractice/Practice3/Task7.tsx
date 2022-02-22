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


export const Task7: FC<PropTypes> = () => {
    useEffect(() => {
        console.log('Task 7');
        function getDivisors(n: number) {
            if (typeof n !== 'number') {
                throw new Error('parameter type is not a Number');
            }
            if (n <= 0) {
                throw new Error(' parameter can\'t be a 0');
            }
            let res = [];
            for (let i = 1; i <= n; i++) {
                if (n % i === 0) {
                    res.push(i);
                }
            }

            return res;
        }
        console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
        // getDivisors('Content'); // Error: parameter type is not a Number
        // getDivisors(0); // Error: parameter can't be a 0
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 7</h3>
            <div>
                Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
                * Если чётное — функция возвращает `true`, если нечётное — `false`.
                <p>
                    Условия:
                    * - Входной параметр должен обладать типом number;
                    * - Входной параметр должен быть больше 0. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
