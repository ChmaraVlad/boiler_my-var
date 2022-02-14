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
    useEffect(()=>{
        console.log('Task 1');

        // let array = [
        //     false,
        //     'Привет.',
        //     2,
        //     'Здравствуй.',
        //     [],
        //     'Прощай.',
        //     {
        //         name:    'Уолтер',
        //         surname: 'Уайт',
        //     },
        //     'Приветствую.',
        // ];
        let array = [
            'Привет.',
            'Здравствуй.',
            'Прощай.',
            'Приветствую.',
        ];


        // Решение

        // interface IntFunc {
        //     (array: []) : number[]
        // }

        // function inspect(): IntFunc {
        //     if (arguments.length > 1) {
        //         throw new Error('must be only 1 parametr');
        //     }
        //     if (!Array.isArray(array)) {
        //         throw new Error('parametr must be an array');
        //     }

        //     let filtered = array.filter((item) => {
        //         return typeof item === 'string';
        //     });

        //     let newArr = filtered.map((item) => {
        //         return item.length;
        //     });

        //     return newArr;
        // }

        // const result = inspect(array);
        // console.log(result); // [ 7, 11, 7, 12 ]
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
                * и возвращать новый массив.
                * Этот новый массив должен содержать исключительно длины строк, которые были в
                * переданном массиве.
                * Если строк в переданном массиве не было — нужно вернуть пустой массив.
                *
                * Условия:
                * - Обязательно использовать встроенный метод массива filter;
                * - Обязательно использовать встроенный метод массива map.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не был передан один аргумент;
                * - В качестве первого аргумента был передан не массив.
                */
            </div>
        </S.TaskWrapper>
    );
};
