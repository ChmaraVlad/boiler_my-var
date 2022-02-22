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

        function checkSpam(source: string, example: string) {
            if (typeof source !== 'string' && typeof example !== 'string') {
                throw new Error('parametrs need be a string');
            } else if (!source.length && example.length) {
                throw new Error('parametrs can not be empty');
            }

            return source.toLowerCase().search(example.toLowerCase()) !== -1;
        }
        console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
        console.log(checkSpam('pitterxxx@gmail.com', 'XXX'));
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                Напишите функцию checkSpam(source, example)
                Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.

                Условия:
                - Функция принимает два параметра;
                - Функция содержит валидацию входных параметров на тип string.
                - Функция должна быть нечувствительна к регистру:
            </div>
        </S.TaskWrapper>
    );
};
