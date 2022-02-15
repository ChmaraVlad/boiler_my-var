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

export const Task3: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 3');

        const url = 'https://jsonplaceholder.typicode.com/users';

        const send = (url: string) => {
            return new Promise(async (resolve, reject) => {
                const res = await fetch(url);
                if (res.status === 200) {
                    resolve(res.json());
                }
                reject(`We have error, status code: ${res.status}`);
            });
        };

        send(url)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

                **Обратите внимание**:

                1. Функция `send` должна возвращать промис;
                2. Использование `async & await` **запрещено**.
                3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
                4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
                5. Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
                s 6. В том случае если сервер ответил статус кодом не `200` промис **должен** реджектится с текстом `We have error, status code: ${'statusCode'}`

            </div>
        </S.TaskWrapper>
    );
};
