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


export const Task1: FC<PropTypes> = () => {
    useEffect(() => {
        function f(num: number) {
            if (typeof num !== 'number') {
                throw new Error('parameter is not a number type');
            }
            console.log(num ** 3);

            return num ** 3;
        }
        console.log('Task 1');
        console.log(f(2));// 8

        // f('Content'); // Error: parameter is not a number type
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 1</h3>
            <div>
                Создайте функцию `f`, которая возвращает куб числа.
                <div>
                    Условия:
                    * - Функция принимает один параметр;
                    * - Функция содержит проверку входного параметра на тип number. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </S.TaskWrapper>
    );
};
