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

        // const array = [ 1, 2, 3, 4, 5, 6 ];

        // // Решение
        // function every(array, cb) {
        //     if (!Array.isArray(array)) {
        //         throw new Error('parametr must be an array');
        //     } else if (arguments.length !== 2) {
        //         throw new Error('must be two parametrs. First an array, second a callback func');
        //     } else if (typeof cb !== 'function') {
        //         throw new Error('parametr must be a Function');
        //     }
        //     if (!array.length) {
        //         return true;
        //     }
        //     for (let i = 0; i < array.length; i++) {
        //         if (cb(array[ i ], i, array) !== true) {
        //             return false;
        //         }
        //     }

        //     return  true;
        // }


        // const result = every(array, function(item, i, arrayRef) {
        //     console.log(item); // элемент массива
        //     console.log(i); // индекс элемента
        //     console.log(arrayRef); // ссылка на обрабатываемый массив

        //     return typeof item === 'string';
        // });

        // console.log(result); // true
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Вручную создать имплементацию функции `every`.
                * Логика работы ручной имплементации должна быть такой-же,
                * как и у встроенного метода.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не было передано два аргумента;
                * - В качестве первого аргумента был передан не массив;
                * - В качестве второго аргумента была передана не функция.
                */
            </div>
        </S.TaskWrapper>
    );
};
