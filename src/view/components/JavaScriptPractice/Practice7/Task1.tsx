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

let array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name:    'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];

type Inspect = (array: Array<string | number | boolean | Array<string> | {
    name: string;
    surname: string;
}>) => number[]

export const Task1: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 1');

        const inspect: Inspect = (array) => {
            const filtered = array
                .filter((item) => typeof item === 'string')
                .map((string) => {
                    if (typeof string === 'string' && string.length) {
                        return string.length;
                    }

                    return 0;
                });

            return filtered;
        };
        const result = inspect(array);

        console.log(result); // [ 7, 11, 7, 12 ]
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
