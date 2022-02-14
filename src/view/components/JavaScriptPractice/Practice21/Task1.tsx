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


        // const isCustomerVerified = (obj)  => {
        //     return new Promise((resolve, reject) => {
        //         if (obj.verified) {
        //             resolve(true);
        //         } else {
        //             reject('Customer is not verified');
        //         }
        //     });
        // };

        // const personFirst = {
        //     name:     'Oliver',
        //     verified: true,
        // };

        // const personSecond = {
        //     name: 'Alex',
        // };

        // isCustomerVerified(personFirst)
        //     .then((status) => console.log(status)) // true
        //     .catch((error) => console.log(error));

        // isCustomerVerified(personSecond)
        //     .then((status) => console.log(status))
        //     .catch((error) => console.log(error)); // Customer is not verified
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                Создайте функцию `isCustomerVerified` которая умеет проверять объект `customer` на валидность.

                Валидным объект `customer` считается только в том случае когда у него установлен флаг `verified: true`.

                **Обратите внимание**:

                1. Функция `isCustomerVerified` должна возвращать промис;
                2. Использование `async \& await` **запрещено**;
                3. Использование посторонних библиотек **запрещено**;
                4. В том случае если объект валидный промис резолвится с одним параметром, аргументом для которого будет `true`;
                5. В том случае если объект невалидный промис реджектится с текстом `Customer is not verified`.
            </div>
        </S.TaskWrapper>
    );
};
