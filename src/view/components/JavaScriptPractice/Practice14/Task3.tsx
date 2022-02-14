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

        // Function.prototype.delay = function f(time) {
        //     if (this.length) {
        //         return (...rest) => setTimeout(()=>{
        //             this(...rest);
        //         }, time);
        //     }

        //     return setTimeout(()=>{
        //         this();
        //     }, time);
        // };


        // function sayHello() {
        //     console.log('Hello!');
        // }
        // sayHello.delay(3000); /* Выведет "Hello!" через 1 секунду */

        // function sum(a, b) {
        //     console.log(a + b);
        // }
        // sum.delay(3000)(5, 2); /* Выведет 7 через 1 секунду. */
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Добавьте всем функциям в прототип метод delay(ms).
                *
                * При вызове этого метода, функция, на которой этот метод вызывают,
                * должна быть вызвана отложено, через указанное количество миллисекунд.
                *
                * Если функция, на которой вызывается метод delay(ms) нуждается в аргументах,
                * то их нужно пробросить в аргументы функции, которую возвращает метод delay(ms).
                *
                * func.delay(1000)('value 1', 'value 2').
                *
                * В примере выше аргументы 'value 1' и 'value 2' станут первым и вторым
                * аргументами для функции func.
                *
                * Условия:
                * - количество миллисекунд указывается в первом аргументе метода delay(ms);
                * - возвращаемая методом delay функция должна быть необязательной;
                * - в реализации метода delay(ms) обязательно использовать setTimeout.
                */
            </div>
        </S.TaskWrapper>
    );
};
