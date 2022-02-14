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

        function createFibonacciGenerator(param = 1) {
            let n = param;
            let prev = 1;
            let current = 1;

            return {
                print: () => {
                    if (n < 3) {
                        n++;

                        return 1;
                    }
                    let next = current + prev;
                    prev = current;
                    current = next;

                    return current;
                },
                reset: () => {
                    n = param;
                    prev = 1;
                    current = 1;
                },
            };
        }


        const generator1 = createFibonacciGenerator();

        console.log(generator1.print()); // 1
        console.log(generator1.print()); // 1
        console.log(generator1.print()); // 2
        console.log(generator1.print()); // 3
        console.log(generator1.reset()); // undefined
        console.log(generator1.print()); // 1
        console.log(generator1.print()); // 1
        console.log(generator1.print()); // 2

        const generator2 = createFibonacciGenerator();

        console.log(generator2.print()); // 1
        console.log(generator2.print()); // 1
        console.log(generator2.print()); // 2
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
                *
                * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
                * - print — возвращает число из последовательности Фибоначчи;
                * - reset — обнуляет последовательность и ничего не возвращает.
                *
                * Условия:
                * - Задачу нужно решить с помощью замыкания.
                */
            </div>
        </S.TaskWrapper>
    );
};
