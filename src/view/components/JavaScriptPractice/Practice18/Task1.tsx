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

export const Task1: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 1');

        // class DB {
        //     #data = null
        //     #id = null
        //     constructor() {
        //         this.#data = new Map();
        //         this.#id = 0;
        //     }

        //     create = (obj) => {
        //         if (typeof obj !== 'object' || Array.isArray(obj)) {
        //             throw new Error('param need to be Object');
        //         }
        //         if (!(obj.name && obj.age && obj.country && obj.salary)) {
        //             throw new Error('Obj must have all keys: name, age, country, salary');
        //         }
        //         if (typeof obj.name !== 'string' && typeof obj.country !== 'string') {
        //             throw new Error('must be a string');
        //         }
        //         if (typeof obj.age !== 'number' && typeof obj.salary !== 'number') {
        //             throw new Error('must be a number');
        //         }

        //         this.#data.set(this.#id, { ...obj, id: this.#id });

        //         return this.#id++;
        //     }

        //     read = (id) => {
        //         if (typeof id !== 'number' || isNaN(id)) {
        //             throw new Error('invalid id');
        //         }

        //         return this.#data.get(id) ? this.#data.get(id) : null;
        //     }

        //     readAll = (...args) => {
        //         if (args.length) {
        //             throw new Error('readAl dont need a parametrs');
        //         }

        //         return [ ...this.#data.values() ];
        //     }

        //     update = (...args) => {
        //         const [ id, obj ] = args;
        //         if (args.length !== 2) {
        //             throw new Error('need to be two params');
        //         }
        //         if (typeof id !== 'number' || isNaN(id) || !this.#data.get(id)) {
        //             throw new Error('invalid id');
        //         }
        //         if (!(obj.name || obj.age || obj.country || obj.salary)) {
        //             throw new Error('Obj must have some of these keys: name, age, country, salary');
        //         }
        //         let target = {
        //             ...this.#data.get(id),
        //             ...obj,
        //         };
        //         this.delete(id);
        //         this.create(target);

        //         return id;
        //     }

        //     delete = (id) => {
        //         if (typeof id !== 'number' || isNaN(id) || !this.#data.get(id)) {
        //             throw new Error('invalid id');
        //         }

        //         return this.#data.delete(id);
        //     }
        // }

        // const db = new DB();

        // const person = {
        //     name:    'Pitter', // обязательное поле с типом string
        //     age:     21, // обязательное поле с типом number
        //     country: 'ua', // обязательное поле с типом string
        //     salary:  500, // обязательное поле с типом number
        // };
        // const person1 = {
        //     name:    'Pitter-1', // обязательное поле с типом string
        //     age:     21, // обязательное поле с типом number
        //     country: 'ua', // обязательное поле с типом string
        //     salary:  500, // обязательное поле с типом number
        // };
        // // const person2 = []

        // const id = db.create(person);
        // const id1 = db.create(person1);
        // // console.log(id1);

        // // let customer = db.read(0);
        // // let customer = db.read();
        // // console.log(customer);

        // let customers = db.readAll(); // массив пользователей
        // console.log(customers);

        // // let up = db.update(0, { age: 22 }); // id
        // // console.log(up);

        // let del = db.delete(id); // true
        // let del1 = db.delete(id1); // true
        // console.log(del, del1);

        // customers = db.readAll(); // массив пользователей
        // console.log(customers);
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                Создать класс `DB` который будет имплементировать `CRUD` модель.

                -   В качестве структуры данных использовать `Map`.
                -   Метод `create`:
                -   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
                -   -   возвращает `id`
                -   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
                -   Метод `read`:
                -   -   принимает идентификатор пользователь
                -   -   если такого пользователя нет возвращать `null`
                -   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
                -   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
                -   Метод `readAll`:
                -   -   возвращает массив пользователей
                -   -   генерировать ошибку если в метод `readAll` передан параметр
                -   Метод `update`:
                -   -   обновляет пользователя
                -   -   принимает 2 обязательных параметра
                -   -   генерирует ошибку если передан несуществующий `id`
                -   -   генерирует ошибку если передан `id` с типом не строка
                -   -   генерирует ошибку если второй параметр не валидный
                -   Метод `delete`:
                -   -   удаляет пользователя
                -   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
            </div>
        </S.TaskWrapper>
    );
};
