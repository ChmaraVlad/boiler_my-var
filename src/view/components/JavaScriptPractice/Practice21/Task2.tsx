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

export const Task2: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 2');

        // const getCustomers = (arr1, arr2) => {
        //     const filteredArr1 = arr1.filter((item) => item.verified);

        //     return new Promise((resolve, reject) => {
        //         let result = [];
        //         for (const item of filteredArr1) {
        //             let id = item.id;
        //             let count = 0;
        //             for (const iterator of arr2) {
        //                 if (iterator.id === id) {
        //                     result.push({
        //                         ...item,
        //                         ...iterator,
        //                     });
        //                     break;
        //                 } else {
        //                     count++;
        //                 }
        //             }
        //             if (count >= arr2.length) {
        //                 reject(`We don't have information about country for this customer: ${item.name}`);
        //             }
        //         }
        //         resolve(result);
        //     });
        // };

        // // ```javascript
        // const customers = [
        //     {
        //         id:       'A1',
        //         name:     'Oliver',
        //         verified: true,
        //     },
        //     {
        //         id:       'A2',
        //         name:     'alex',
        //         verified: true,
        //     },
        // ];


        // const countries = [
        //     {
        //         id:      'A1',
        //         country: 'usa',
        //     },
        //     {
        //         id:      'A2',
        //         country: 'poland',
        //     },
        // ];

        // getCustomers(customers, countries)
        //     .then((customers) => console.log(customers))
        //     .catch((error) => console.log(error));
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

                Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

                Обратите внимание**:

                1. Функция `getCustomers` должна возвращать промис;
                2. Использование `async & await` **запрещено**;
                3. Использование посторонних библиотек **запрещено**;
                4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${'customer.name'}`;
                5. Склеивание происходит **только** для объектов с флагом `verified: true`.

            </div>
        </S.TaskWrapper>
    );
};
