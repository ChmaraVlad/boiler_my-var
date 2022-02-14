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

export const Task5: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 5');

        // const array = [ 1, 2, 3, 4, 5 ];
        // const INITIAL_ACCUMULATOR = 6;

        // // Решение
        // function reduce(array, cb, number) {
        //     if (arguments.length !== 3) {
        //         throw new Error('must be three parametrs.');
        //     } else if (!Array.isArray(array)) {
        //         throw new Error(' first parametr must be an array');
        //     } else if (typeof cb !== 'function') {
        //         throw new Error('second parametr must be a Function');
        //     } else if (typeof number !== 'number') {
        //         throw new Error('third parametr must be a Number');
        //     }
        //     if (!array.length && number) {
        //         return number;
        //     } else if (!array.length) {
        //         throw new Error('Reduce of empty array with no initial value');
        //     }
        //     let result = number ? number : 0;
        //     for (let i = 0; i < array.length; i++) {
        //         cb(result, array[ i ], i, array);
        //         result += array[ i ];
        //     }

        //     return result;
        // }

        // const result = reduce(
        //     array,
        //     function(accumulator, item, i, arrayRef) {
        //         console.log(accumulator); // значение-аккумулятор
        //         console.log(item); // элемент массива
        //         console.log(i); // индекс элемента
        //         console.log(arrayRef); // ссылка на обрабатываемый массив

        //         return accumulator + item;
        //     },
        //     INITIAL_ACCUMULATOR,
        // );

        // console.log(result); // 21
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 5.</h1>
            <div>
                * Вручную создать имплементацию функции `reduce`.
                * Логика работы ручной имплементации должна быть такой-же,
                * как и у встроенного метода.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не было передано три аргумента;
                * - В качестве первого аргумента был передан не массив;
                * - В качестве второго аргумента была передана не функция;
                * - В качестве третьего аргумента было передан не число.
                */
            </div>
        </S.TaskWrapper>
    );
};
