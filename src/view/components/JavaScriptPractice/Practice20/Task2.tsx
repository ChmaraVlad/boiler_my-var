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
type TypeObject = {
    name: string;
    verified?: boolean;
}

class Customers {
    #arrayCustomers: TypeObject[];
    constructor() {
        this.#arrayCustomers = [];
    }

    *[ Symbol.iterator ]() {
        let filtered = this.#arrayCustomers.filter((item) => item.verified);
        for (const item of filtered) {
            yield item;
        }
    }

    add(obj: TypeObject) {
        if (typeof obj === 'object' && Array.isArray(obj)) {
            throw new Error('param must to be obj');
        }
        if (!obj.name) {
            throw new Error('obj must to have property - name');
        }
        this.#arrayCustomers.push(obj);
    }
}

export const Task2: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 2');


        // // ```javascript
        const customers = new Customers();
        customers.add({ name: 'Alex' });
        customers.add({ name: 'Victor' });
        customers.add({ name: 'Marcus' });
        customers.add({ name: 'Andrii', verified: true });
        customers.add({ name: 'Marco', verified: true });
        customers.add({ name: 'Oliver' });
        customers.add({ name: 'Lisa', verified: true });
        customers.add({ name: 'John' });
        customers.add({ name: 'Ivan', verified: true });

        for (const customer of customers) {
            console.log(customer);
        }

        // В консоли будет
        // { name: 'Andrii', verified: true }
        // { name: 'Marco', verified: true }
        // { name: 'Lisa', verified: true }
        // { name: 'Ivan', verified: true }
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                Улучшите класс `Customers` добавив функцию генератор.

                Обратите внимание:

                1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

            </div>
        </S.TaskWrapper>
    );
};
