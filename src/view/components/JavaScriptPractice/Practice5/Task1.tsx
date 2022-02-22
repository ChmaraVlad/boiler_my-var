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

        function upperCaseFirst(str: string) {
            if (typeof str !== 'string') {
                throw new Error('parametr need be a string');
            } else if (!str.length) {
                throw new Error('parametr can not be empty');
            }

            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        console.log(upperCaseFirst('pitter'));
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                Напишите функцию upperCaseFirst(string).
                Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.

                Условия:
                - Функция принимает один параметр;
                - Функция содержит валидацию входного параметра на тип string.
            </div>
        </S.TaskWrapper>
    );
};
