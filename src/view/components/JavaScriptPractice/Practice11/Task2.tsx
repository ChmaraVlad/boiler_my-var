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


        function createFibonacciGenerator(param = 1) {
            let n = param;
            let prev = 1;
            let current = 1;

            return () => {
                if (n < 3) {
                    n++;

                    return 1;
                }
                let next = current + prev;
                prev = current;
                current = next;

                return current;
            };
        }

        const generateFibonacciNumber = createFibonacciGenerator();

        console.log(generateFibonacciNumber()); // 1
        console.log(generateFibonacciNumber()); // 1
        console.log(generateFibonacciNumber()); // 2
        console.log(generateFibonacciNumber()); // 3
        console.log(generateFibonacciNumber()); // 5
        console.log(generateFibonacciNumber()); // 8
        // console.log(generateFibonacciNumber(10)); // 13
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                * Создайте функцию createFibonacciGenerator(),
                * которая вернёт ещё одну функцию,
                * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
                *
                * Условия:
                * - Задачу нужно решить с помощью замыкания.
                */
            </div>
        </S.TaskWrapper>
    );
};
