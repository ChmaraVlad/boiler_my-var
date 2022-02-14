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


        // class Customers {
        //     #arrayCustomers = null
        //     constructor() {
        //         this.#arrayCustomers = [];
        //     }

        //     [ Symbol.iterator ]() {
        //         let i = 0;

        //         return {
        //             next: () => {
        //                 let filtered = this.#arrayCustomers.filter((item) => item.verified);
        //                 const done = i >= filtered.length;
        //                 const value = !done
        //                     ? filtered[ i++ ]
        //                     : undefined;

        //                 return {
        //                     done,
        //                     value,
        //                 };
        //             },
        //         };
        //     }

        //     add(obj) {
        //         if (typeof obj === 'object' && Array.isArray(obj)) {
        //             throw new Error('param must to be obj');
        //         }
        //         if (!obj.name) {
        //             throw new Error('obj must to have property - name');
        //         }
        //         this.#arrayCustomers.push(obj);
        //     }
        // }


        // // ```javascript
        // const customers = new Customers();
        // customers.add({ name: 'Alex' });
        // customers.add({ name: 'Victor' });
        // customers.add({ name: 'Marcus' });
        // customers.add({ name: 'Andrii', verified: true });
        // customers.add({ name: 'Marco', verified: true });
        // customers.add({ name: 'Oliver' });
        // customers.add({ name: 'Lisa', verified: true });
        // customers.add({ name: 'John' });
        // customers.add({ name: 'Ivan', verified: true });

        // // console.log(customers);

        // for (const customer of customers) {
        //     console.log(customer);
        // }


        // // В консоли будет
        // // { name: 'Andrii', verified: true }
        // // { name: 'Marco', verified: true }
        // // { name: 'Lisa', verified: true }
        // // { name: 'Ivan', verified: true }
        // // ```

        // // const iterator = customers[Symbol.iterator]();

        // // console.log(iterator.next());
        // // console.log(iterator.next());
        // // console.log(iterator.next());

        // // ==============================================

        // const iterable = {
        //     items: [ 1, 2, 3 ],
        //     /**
        //      * Метод @@iterator (Symbol.iterator) c 0 аргументов.
        //      * Возвращаемый методом объект соответствует протоколу «Итератор» (Iterator protocol).
        //      */
        //     [ Symbol.iterator ]() {
        //         let i = 0;

        //         // логика....

        //         return {
        //             next: () => {
        //                 const done = i >= this.items.length;
        //                 const value = !done ? this.items[ i++ ] : undefined;

        //                 return {
        //                     done,
        //                     value,
        //                 };
        //             },
        //         };
        //     },
        // };

        // for (const item of iterable) {
        //     console.log(item);
        // }

        // const iterator = iterable[Symbol.iterator]();

        // console.log(iterator.next());
        // console.log(iterator.next());
        // console.log(iterator.next());
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                Создайте класс `Customers` который умеет работать с механизмом `for of`.

                Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

                Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

                **Обратите внимание**:

                1. Использование генераторов **запрещено**.
                2. Использование посторонних библиотек **запрещено**
                3. У класса `Customers` **должен** быть метод `Symbol.iterator`

            </div>
        </S.TaskWrapper>
    );
};
