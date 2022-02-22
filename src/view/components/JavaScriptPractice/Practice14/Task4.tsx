/* eslint-disable max-len */
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

class Developer {
    completedTasks: string[] = [];

    completeTask(task: string) {
        this.completedTasks.push(task);
    }
}

export const Task4: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 4');

        const developer1 = new Developer();
        const developer2 = new Developer();

        developer1.completeTask('finish a feature');
        developer1.completeTask('refactor code');
        developer1.completeTask('refactor code');

        developer2.completeTask('fix bug');

        console.log(developer1.completedTasks.length); // 3
        console.log(developer2.completedTasks.length); // 1
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 4.</h1>
            <div>
                * Дан класс Developer.
                *
                * У класса два свойства:
                * - completedTasks — массив с выполненными задачами;
                * - completeTask — метод для пополнения массива с выполненными задачами новой выполненной задачей.
                *
                * При создании двух экземпляров класса Developer,
                * если выполнил задачу – почему-то эта-же задача
                * считается выполненной и вторым вторым разработчиком.
                *
                * Исправьте этот пример так, чтобы при выполнении задачи одним разработчиком
                * массив completedTasks второго разработчика никак не менялся.
                * Нужно, чтобы у каждого разработчика был свой независимый массив completedTasks.
                *
                *  Условия:
                * - Решить задачу в стиле прототипного наследования JavaScript.
                */
            </div>
        </S.TaskWrapper>
    );
};
