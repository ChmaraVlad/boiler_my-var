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

        const array = [ 1, 2, 3 ];

        interface Callback<TData> {
            (item: TData, index: number, arrayRef: TData[]): void
        }

        function forEach<T>(array: T[], cb: Callback<T>): void {
            if (!Array.isArray(array)) {
                throw new Error('parametr must be an array');
            } else if (arguments.length !== 2) {
                throw new Error('must be two parametrs. First an array, second a callback func');
            } else if (typeof cb !== 'function') {
                throw new Error('parametr must be a Function');
            }
            for (let i = 0; i < array.length; i++) {
                if (array[ i ] === undefined) {}
                cb(array[ i ], i, array);
            }
        }

        const result = forEach<number>(array, function(item, index, arrayRef) {
            console.log(item); // элемент массива
            console.log(index); // индекс элемента
            console.log(arrayRef); // ссылка на обрабатываемый массив
        });

        console.log(result); // undefined
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                Вручную создать имплементацию функции `forEach`.
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
