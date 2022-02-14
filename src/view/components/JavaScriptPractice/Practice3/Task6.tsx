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


export const Task6: FC<PropTypes> = () => {
    useEffect(() => {
        console.log('Task 6');
        function isEven(n: number) {
            if (typeof n !== 'number') {
                throw new Error('parameter type is not a Number');
            }
            if (n % 2 === 0) {
                return true;
            }

            return false;
        }
        console.log(isEven(3)); // false
        console.log(isEven(4)); // true
        // isEven('Content'); // Error: parameter type is not a Number
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 6</h3>
            <div>
                Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
                * Если чётное — функция возвращает `true`, если нечётное — `false`
                <p>
                    Условия:
                    * - Функция принимает один параметр;
                    * - Функция содержит проверку входного параметра на тип number. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
