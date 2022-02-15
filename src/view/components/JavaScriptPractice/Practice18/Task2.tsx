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

// type TypePerson = {
//     name:   string,
//     age:     number,
//     country: string,
//     salary:  number,
//     id?: number;
// };
// type TypeUpdateMethod = [id: number, obj: TypePerson]

// class DB {
//     #data: Map<number, TypePerson>;
//     #id: number;
//     constructor() {
//         this.#data = new Map<number, TypePerson>();
//         this.#id = 0;
//     }

//     create = (obj: TypePerson) => {
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

//     read = (id: number) => {
//         if (typeof id !== 'number' || isNaN(id)) {
//             throw new Error('invalid id');
//         }

//         return this.#data.get(id) ? this.#data.get(id) : null;
//     }

//     readAll = () => {
//         return [ ...this.#data.values() ];
//     }

//     update = (...args: TypeUpdateMethod) => {
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

//     delete = (id: number) => {
//         if (typeof id !== 'number' || isNaN(id) || !this.#data.get(id)) {
//             throw new Error('invalid id');
//         }

//         return this.#data.delete(id);
//     }

//     find = (obj: TypePerson) => {
//         function checkPrimitiveProperties(a: TypePerson, b: TypePerson) {
//             let notEqual = [];
//             for (const key in a) {
//                 if (typeof a[ key ] !== 'object') {
//                     for (const prop in b) {
//                         if (key === prop) {
//                             if (a[ key ] !== b[ prop ]) {
//                                 notEqual.push(key);
//                                 continue;
//                             }
//                         }
//                     }
//                 }
//             }
//             if (notEqual.includes('name') || notEqual.includes('country')) {
//                 return false;
//             }

//             return b;
//         }

//         function checkObjProperties(a: TypePerson, b: TypePerson) {
//             let equal = [];
//             let twoValuesObj = 0;
//             let howManyProperties = 0;
//             let howManyPropertiesMatch = 0;

//             for (const key in a) {
//                 if (typeof a[ key ] === 'object') {
//                     for (const prop in b) {
//                         if (key === prop) {
//                             ++howManyProperties;
//                             if (a[ key ].min && a[ key ].max) {
//                                 if (a[ key ].min) {
//                                     twoValuesObj++;
//                                 }
//                                 if (a[ key ].max) {
//                                     twoValuesObj++;
//                                 }
//                                 if (twoValuesObj === 2) {
//                                     if (a[ key ].min < b[ prop ] &&  b[ prop ] < a[ key ].max) {
//                                         howManyPropertiesMatch++;
//                                     }
//                                 }
//                             } else if (a[ key ].min || a[ key ].max) {
//                                 if (a[ key ].min < b[ prop ] || a[ key ].max > b[ prop ]) {
//                                     howManyPropertiesMatch++;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             if (howManyProperties === howManyPropertiesMatch) {
//                 equal.push(b);
//             }
//             if (equal.length) {
//                 return equal;
//             }
//         }

//         if (typeof obj !== 'object' || Array.isArray(obj)) {
//             throw new Error('param need to be Object');
//         }
//         if (!(obj.name || obj.age || obj.country || obj.salary)) {
//             throw new Error('Obj must have some of these keys: name, age, country, salary');
//         }
//         let res = [];
//         let checkedPrimitives = [];
//         let dataArray = [ ...this.#data.values() ];

//         for (let i = 0; i < dataArray.length; i++) {
//             if (checkPrimitiveProperties(obj, dataArray[ i ])) {
//                 checkedPrimitives.push(checkPrimitiveProperties(obj, dataArray[ i ]));
//             }
//         }
//         for (let i = 0; i < checkedPrimitives.length; i++) {
//             let middle =  checkObjProperties(obj, checkedPrimitives[ i ]);
//             if (middle) {
//                 res.push(...middle);
//             }
//         }

//         return res;
//     }
// }

// function checkPrimitiveProperties(a: TypePerson, b: TypePerson) {
//     let notEqual = [];
//     for (const key in a) {
//         if (typeof a[ key ] !== 'object') {
//             for (const prop in b) {
//                 if (key === prop) {
//                     if (a[ key ] !== b[ prop ]) {
//                         notEqual.push(key);
//                         continue;
//                     }
//                 }
//             }
//         }
//     }
//     if (notEqual.includes('name') || notEqual.includes('country')) {
//         return false;
//     }

//     return b;
// }

// function checkObjProperties(a: TypePerson, b: TypePerson) {
//     let equal = [];
//     let twoValuesObj = 0;
//     let howManyProperties = 0;
//     let howManyPropertiesMatch = 0;

//     for (const key in a) {
//         if (typeof a[ key ] === 'object') {
//             for (const prop in b) {
//                 if (key === prop) {
//                     ++howManyProperties;
//                     if (a[ key ].min && a[ key ].max) {
//                         if (a[ key ].min) {
//                             twoValuesObj++;
//                         }
//                         if (a[ key ].max) {
//                             twoValuesObj++;
//                         }
//                         if (twoValuesObj === 2) {
//                             if (a[ key ].min < b[ prop ] &&  b[ prop ] < a[ key ].max) {
//                                 howManyPropertiesMatch++;
//                             }
//                         }
//                     } else if (a[ key ].min || a[ key ].max) {
//                         if (a[ key ].min < b[ prop ] || a[ key ].max > b[ prop ]) {
//                             howManyPropertiesMatch++;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     if (howManyProperties === howManyPropertiesMatch) {
//         equal.push(b);
//     }
//     if (equal.length) {
//         return equal;
//     }
// }


export const Task2: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 2');

        // const db = new DB();

        // const person = {
        //     name:    'Pitter', // обязательное поле с типом string
        //     age:     23, // обязательное поле с типом number
        //     country: 'ua', // обязательное поле с типом string
        //     salary:  500, // обязательное поле с типом number
        // };
        // const person1 = {
        //     name:    'Pitter-1', // обязательное поле с типом string
        //     age:     21, // обязательное поле с типом number
        //     country: 'ua', // обязательное поле с типом string
        //     salary:  500, // обязательное поле с типом number
        // };
        // const person2 = {
        //     name:    'Pitter', // обязательное поле с типом string
        //     age:     21, // обязательное поле с типом number
        //     country: 'rus', // обязательное поле с типом string
        //     salary:  500, // обязательное поле с типом number
        // };
        // const person3 = {
        //     name:    'Pitter', // обязательное поле с типом string
        //     age:     23, // обязательное поле с типом number
        //     country: 'ua', // обязательное поле с типом string
        //     salary:  200, // обязательное поле с типом number
        // };

        // const id = db.create(person);
        // const id1 = db.create(person1);
        // const id2 = db.create(person2);
        // const id3 = db.create(person3);

        // const query = {
        //     country: 'ua',
        //     // name: 'Pitter',
        //     age:     {
        //         max: 24,
        //     },
        //     salary: {
        //         min: 300,
        //         max: 600,
        //     },
        // };

        // let customers = db.find(query); // массив пользователей
        // console.log(customers);
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                Улучшить класс `DB` из предыдущей задачи.

                -   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
                -   Генерировать ошибку, если query не валидный
                -   Поля `name` и `country` ищут 100% совпадение
                -   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
                -   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
            </div>
        </S.TaskWrapper>
    );
};
