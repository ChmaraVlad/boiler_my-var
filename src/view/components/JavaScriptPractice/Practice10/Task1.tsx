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

        // function bind(func, obj, ...rest) {
        //     if (typeof func !== 'function') {
        //         throw new TypeError('First parametr must be a function');
        //     }
        //     if (typeof obj !== 'object' && Array.isArray(obj)) {
        //         throw new TypeError('Second parametr must be an object');
        //     }

        //     return () => func.apply(obj, rest);
        // }

        // function getName(greeting, message) {
        //     return `${greeting} ${message} ${this.name}.`;
        // }

        // const user = { name: 'Walter', getName };
        // const oliver = { name: 'Oliver' };

        // const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

        // console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
        // console.log(boundedGetName()); // Hello! I am Oliver.
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                * Напишите имплементацию функции Function.prototype.bind().
                *
                * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
                * и возвращать новую, привязанную версию целевой функции.
                *
                * Функция bind() должна обладать следующими параметрами:
                * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
                * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
                * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
                *
                * Генерировать ошибки если:
                * - Первый параметр не является типом function;
                * - Второй параметр не является типом object;
                * - Второй параметр является массивом.
                *
                * Условия:
                * - Использовать встроенную функцию Function.prototype.bind() запрещено.
                */
            </div>
        </S.TaskWrapper>
    );
};
