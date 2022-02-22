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

export const Task1: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 1');

        function createNumberGenerator() {
            let numbers: number[] = [];

            return function func() {
                let res = Math.floor(Math.random() * 100);
                if (!numbers.includes(res)) {
                    numbers.push(res);
                }

                return res;
            };
        }

        const TOTAL_ITERATIONS = 101;
        let invocations = 0;
        const generateNumber = createNumberGenerator();

        try {
            for (let iteration = 1; iteration < TOTAL_ITERATIONS; iteration++) {
                console.log(`Iteration: ${iteration}. Number: ${generateNumber()}`);
                invocations += 1;
            }
        } catch {
            console.log('Error caught.');
            console.log(
                `Function generated an error after ${invocations} invocations.`,
            );
        }

        // Когда все числа выведутся:
        // Error caught.
        // Function generated an error after 99 invocations.
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                * Создайте функцию createNumberGenerator(),
                * которая вернёт ещё одну функцию,
                * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (не включая само число 100).
                *
                * Условия:
                * - Числа не должны повторяться;
                * - Задачу нужно решить с помощью замыкания.
                *
                * Генерировать ошибку если:
                * - Функция была вызвана, когда доступные для выведения числа закончились.
                *
                * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
                */
                */
            </div>
        </S.TaskWrapper>
    );
};
