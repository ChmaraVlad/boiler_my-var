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

export const Task5: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 5');

        // class User {
        //     constructor(firstName, lastName) {
        //         this.firstName = firstName;
        //         this.lastName = lastName;
        //     }

        //     getName() {
        //         return this.firstName + ' ' + this.lastName;
        //     }
        // }
        // class Student extends User {
        //     constructor(firstName, lastName, year) {
        //         super(firstName, lastName);
        //         this.year = year;
        //     }

        //     getCourse() {
        //         let year = new Date();

        //         return year.getFullYear() - this.year;
        //     }
        // }


        // const student = new Student('Water', 'White', 2015);
        // const user = new User('Water', 'White');

        // console.log(student.getName()); // Walter White
        // console.log(user.getName()); // Walter White
        // console.log(student.getCourse()); // 4
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 5.</h1>
            <div>
                * Реализуйте класс Student , который наследует от класса User.
                *
                * Класс User должен обладать следующими свойствами:
                * - firstName — имя;
                * - lastName — фамилия;
                * - getName() — метод, который возвращает имя и фамилию пользователя.
                *
                * Класс Student должен обладать следующими свойствами:
                * - year — год поступления в вуз;
                * - getCourse() - метод, который возвращает текущий курс студента (от 1 до 5).
                *
                * Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз.
                * Текущий год получите самостоятельно.
                *
                * Условия:
                * - Реализация решения — это синтаксис современных классов JavaScript;
                * - В реализации работы метода getCourse обязательно использовать конструктор Date.
                */
            </div>
        </S.TaskWrapper>
    );
};
