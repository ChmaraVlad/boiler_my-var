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


export const Task3: FC<PropTypes> = () => {
    useEffect(() => {
        function f(a: number, b: number, c: number) {
            if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
                throw new Error('all parameters should be a Number type');
            }

            return (a - b) / c;
        }
        console.log('Task 3');
        console.log(f(9, 3, 2)); // 3

        // f('s', 9, 3); // Error: all parameters type should be a Number
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 3</h3>
            <div>
                Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
                <div>
                    Условия:
                    * - Функция принимает три параметра;
                    * - Функция содержит проверку входных параметров на тип number.<br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </div>
            </div>
        </S.TaskWrapper>
    );
};
