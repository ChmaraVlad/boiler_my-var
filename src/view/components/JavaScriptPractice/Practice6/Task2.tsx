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
    useEffect(()=>{
        console.log('Task 2');

        // const array = [ 'Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!' ];

        // // Решение
        // function filter(array, cb) {
        //     if (!Array.isArray(array)) {
        //         throw new Error('parametr must be an array');
        //     } else if (arguments.length !== 2) {
        //         throw new Error('must be two parametrs. First an array, second a callback func');
        //     } else if (typeof cb !== 'function') {
        //         throw new Error('parametr must be a Function');
        //     }
        //     let newArr = [];
        //     for (let i = 0; i < array.length; i++) {
        //         if (cb(array[ i ], i, array) === true) {
        //             newArr.push(array[ i ]);
        //         }
        //     }

        //     return  newArr;
        // }

        // const filteredArray = filter(array, function(item, i, arrayRef) {
        //     // console.log(item); // элемент массива
        //     // console.log(i); // индекс элемента
        //     // console.log(arrayRef); // ссылка на обрабатываемый массив

        //     return typeof item === 'number';
        // });

        // console.log(filteredArray); // ['Добрый вечер!']
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                * Вручную создать имплементацию функции `filter`.
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
