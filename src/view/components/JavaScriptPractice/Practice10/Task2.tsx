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

        // function calculate(...cbs) {
        //     const results = [];
        //     cbs.forEach((func, index) => {
        //         if (typeof func !== 'function') {
        //             throw new Error('Invalid params, must be a cb');
        //         }

        //         const arg = results[ index - 1 ];
        //         const result = index === 0 ? func() : func(arg);

        //         if (typeof result === 'undefined') {
        //             throw new Error(
        //                 `callback at index ${index} did not return any value.`,
        //             );
        //         }

        //         results.push(result);
        //     });

        //     return results[ results.length - 1 ];
        // }

        // const result = calculate(
        //     () => {
        //         return 7;
        //     },
        //     (prevResult) => {
        //         return prevResult + 4;
        //     },
        //     (prevResult) => {
        //         return prevResult * 5;
        //     },
        // );

        // console.log(result); // 55
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
                *
                * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
                * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
                * То есть возвращаемое значение каждой коллбек-функции из цепочки
                * становится доступным из параметра следующей коллбек-функции в цепочке.
                *
                * Первая коллбек-функция не принимает параметров.
                *
                * После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
                *
                * Генерировать ошибки если:
                * - Любой из аргументов функции calculate() не является функцией;
                * - Любая функция из аргументов не вернула значение.
                */
            </div>
        </S.TaskWrapper>
    );
};
