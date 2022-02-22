/* eslint-disable max-len */
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
    useEffect(()=>{
        console.log('Task 4');

        const compose = (...callbacks: Function[]) => (initialArgument = '') => {
            return callbacks.reduceRight((accumulator: string, next: Function, index: number) => {
                if (typeof next !== 'function') {
                    throw new Error('callback is not a function type.');
                } else if (
                    typeof accumulator === 'undefined'
            && typeof initialArgument !== 'undefined'
                ) {
                    throw new Error(
                        `callback at index ${index - 1} did not return any value.`,
                    );
                }

                return next(accumulator);
            }, initialArgument);
        };

        // const result1 = compose(
        //     (prevResult) => prevResult + 'o',
        //     (prevResult) => prevResult + 'l',
        //     (prevResult) => prevResult + 'l',
        //     (prevResult) => prevResult + 'e',
        // )('h');
        // const result2 = compose(
        //     (prevResult) => prevResult + 'o',
        //     (prevResult) => prevResult + 'l',
        //     (prevResult) => prevResult + 'l',
        //     (prevResult) => prevResult + 'e',
        //     () => 'h',
        // )();

        // ============ как сделать лучше ??? без прописи в каждый вызов типа TypeInitArg ??
        type TypeInitArg = string;
        const result1 = compose(
            (prevResult: TypeInitArg) => prevResult + 'o',
            (prevResult: TypeInitArg) => prevResult + 'l',
            (prevResult: TypeInitArg) => prevResult + 'l',
            (prevResult: TypeInitArg) => prevResult + 'e',
        )('h');
        const result2 = compose(
            (prevResult: TypeInitArg) => prevResult + 'o',
            (prevResult: TypeInitArg) => prevResult + 'l',
            (prevResult: TypeInitArg) => prevResult + 'l',
            (prevResult: TypeInitArg) => prevResult + 'e',
            () => 'h',
        )();

        console.log(result1); // 'hello'
        console.log(result2); // 'hello'
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 4.</h1>
            <div>
                * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
                *
                * При запуске compose() последовательно запускает коллбек-функции из аргументов.
                *
                * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
                *
                * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
                * То есть возвращаемое значение каждой коллбек-функции из цепочки
                * становится доступным из параметра следующей коллбек-функции в цепочке.
                *
                * Функция compose() возвращает ещё одну функцию с одним параметром.
                * Значение, переданное этой функции в качестве аргумента должно стать
                * параметром первой коллбек-функции в цепочке выполнения функции compose().
                *
                * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
                *
                * Генерировать ошибки если:
                * - Любой из аргументов не является функцией;
                * - Любая функция из аргументов не вернула значение.
                *
                * Заметка:
                * Если функции, которая является возвращаемым значением compose()
                * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
                */
            </div>
        </S.TaskWrapper>
    );
};
