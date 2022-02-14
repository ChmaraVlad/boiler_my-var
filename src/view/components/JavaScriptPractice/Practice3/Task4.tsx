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


export const Task4: FC<PropTypes> = () => {
    useEffect(() => {
        function f(value: Number) {
            if (typeof value !== 'number') {
                throw new Error('parameter type is not a Number');
            }
            if (value < 1 || value > 7) {
                throw new Error('parameter should be in the range of 1 to 7');
            }
            switch (value) {
                case 1:
                    return 'Sunday';
                case 2:
                    return 'Monday';
                case 3:
                    return 'Tuesday';
                case 4:
                    return 'Wednesday';
                case 5:
                    return 'Thursday';
                case 6:
                    return 'Friday';
                case 7:
                    return 'Saturday';
                default:
                    return 'Error';
            }
        }
        console.log('Task 4');
        console.log(f(1)); // Воскресенье

        f(2); // Понедельник
        // f(8); // Error: parameter should be in the range of 1 to 7
        // // f('1'); // Error: parameter type is not a Number
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 4</h3>
            <div>
                Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
                * а затем возвращает день недели на русском языке.
                <div>
                    Условия:
                    * - Функция принимает один параметр;
                    * - Функция содержит проверку входного параметра на тип number.
                    * - Входной параметр должен быть числом от 1 до 7. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </S.TaskWrapper>
    );
};
