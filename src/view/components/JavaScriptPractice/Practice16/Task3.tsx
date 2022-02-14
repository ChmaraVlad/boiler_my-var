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

        // class Worker {
        //     #firstName = null
        //     #lastName = null
        //     #rate = null
        //     #days = null

        //     constructor(firstName, lastName, rate, days) {
        //         this.#firstName = firstName;
        //         this.#lastName = lastName;
        //         this.#rate = rate;
        //         this.#days = days;
        //     }

        //     getSalary = () => this.#rate * this.#days
        //     getName = () => this.#firstName + ' ' + this.#lastName
        //     getDays = () => this.#days
        //     getRate = () => this.#rate
        // }


        // const worker = new Worker('Walter', 'White', 10, 31);

        // console.log(worker.getName()); // Walter White
        // console.log(worker.getRate()); // 10
        // console.log(worker.getDays()); // 31
        // console.log(worker.getSalary()); // 10 * 31 = 310

        // console.log(worker.getSalary()); // 20 * 10 = 200
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Улучшите класс Worker из предыдущей задачи.
                * Для свойства rate и days добавьте методы для установки значений.
                *
                * Условия:
                * - Реализация решения — это синтаксис современных классов JavaScript;
                * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
                */
            </div>
        </S.TaskWrapper>
    );
};
