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

        function truncate(string: string, maxLength: number) {
            if (typeof string !== 'string') {
                throw new Error(' first parametr need be a string');
            } else if (typeof maxLength !== 'number') {
                throw new Error(' second parametr need be a number');
            }

            if (string.length > maxLength) {
                return string.slice(0, maxLength - 3) + '...';
            }

            return string;
        }
        console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Создайте функцию truncate(string, maxLength).
                * Функция проверяет длину строки string.
                * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
                * Результатом функции должна быть (при необходимости) усечённая строка.
                *
                * Условия:
                * - Функция принимает два параметра;
                * - Функция содержит валидацию входных параметров;
                * - Первый параметр должен обладать типом string;
                * - Второй параметр должен обладать типом number.
                */
            </div>
        </S.TaskWrapper>
    );
};
