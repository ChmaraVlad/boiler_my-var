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

        const PRICE = '$120';

        // Решение
        function extractCurrencyValue(source: string) {
            if (typeof source !== 'string') {
                throw new Error('parametr need to be a string');
            }

            return Number(source.slice(1));
        }

        console.log(extractCurrencyValue(PRICE));
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 4.</h1>
            <div>
                Дана стоимость в виде строки: `"$120"`.
                * Первый символ — валюта, затем – число.
                * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
                * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
                *
                * Условия:
                * - Функция принимает один параметр;
                * - Функция содержит валидацию входного параметра на тип string.
            </div>
        </S.TaskWrapper>
    );
};
