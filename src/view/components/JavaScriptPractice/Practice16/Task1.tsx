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

class Worker {
    firstName: string;
    lastName: string;
    rate: number;
    days: number;
    constructor(firstName: string, lastName: string, rate: number, days: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }

    getSalary = () => this.rate * this.days
}

export const Task1: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 1');

        const worker = new Worker('Walter', 'White', 10, 31);

        console.log(worker.firstName); // Walter
        console.log(worker.lastName); // White
        console.log(worker.rate); // 10
        console.log(worker.days); // 31
        console.log(worker.getSalary()); // 10 * 31 = 310
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                * Реализуйте класс Worker, который будет иметь следующие свойства:
                *
                * - firstName — имя;
                * - lastName — фамилия;
                * - rate — ставка за день работы;
                * - days — количество отработанных дней.
                *
                * Класс должен иметь метод getSalary(), который будет возвращать зарплату работника.
                * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
                *
                * Условия:
                * - Реализация решения — это синтаксис современных классов JavaScript;
                */
            </div>
        </S.TaskWrapper>
    );
};
