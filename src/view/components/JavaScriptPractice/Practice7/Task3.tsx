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
    useEffect(()=>{
        console.log('Task 3');


        function createArray(a: string|number, b: number) {
            return Array(b).fill(a);
        }

        const result = createArray('x', 5);

        console.log(result); // [ x, x, x, x, x ]
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
                * Первым параметром функция принимает значение, которым заполнять массив.
                * А вторым — количество элементов, которое должно быть в массиве.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не было передано два аргумента;
                * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
                * - В качестве второго аргумента был передан не число.
                */
            </div>
        </S.TaskWrapper>
    );
};
