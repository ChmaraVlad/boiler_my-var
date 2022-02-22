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


export const Task8: FC<PropTypes> = () => {
    useEffect(() => {
        console.log('Task 8');

        function f(array: string[] | number[]) {
            if (Array.isArray(array) === false) {
                throw new Error('parameter type should be an array');
            }
            if (array.length === 0) {
                throw new Error(' parameter can\'t be an empty');
            }
            const newArr = array.slice();
            console.log(newArr.shift());
            if (newArr.length === 1) {
                console.log(newArr.shift());

                return;
            }
            f(newArr);
        }

        console.log(f([ 1, 2, 3 ]));
        // 1
        // 2
        // 3
        // f(1, 2, 3); // Error: parameter type should be an array
        // f('Content'); // Error: parameter type should be an array
        // f([]); // Error: parameter can't be an empty
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 8</h3>
            <div>
                Дан массив с числами `[1, 2, 3]`.
                * Создайте функцию `f`, которая принимает массив в качестве параметра,
                * а затем последовательно выводит на экран его элементы.
                <p>
                    Условия:
                    * - Входной параметр должен быть не пустым массивом;
                    * - Обязательно использовать рекурсию;
                    * - Использовать цикл запрещено. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
