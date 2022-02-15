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


class Countries {
    #url: string;
    constructor(url: string) {
        this.#url = url;
    }

    send(a: number) {
        return new Promise(async (resolve, reject) => {
            const res = await fetch(`${this.#url}?_page=0&_limit=${a}`);
            if (res.status === 200) {
                resolve(res.json());
            }
            reject(`We have error, status code: ${res.status}`);
        });
    }
}

export const Task4: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 4');

        const url = 'https://jsonplaceholder.typicode.com/posts';
        const countries = new Countries(url);


        (async() => {
            try {
                const data = await countries.send(7);
                console.log(data); // массив стран
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 4.</h1>
            <div>
                Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

                У класса `Countries` должен быть один метод `send` который должен возвращать промис.

                А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.

                **Обратите внимание**:

                1. Метод `send` должен возвращать промис.
                2. Использование `async & await` внутри класса **запрещено**.
                3. Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
                4. Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран.
                5. В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: ${'statusCode'}`
                6. Генерировать ошибку если `url` по типу не строка.
                7. Генерировать ошибку если методу `send` передать по типу не число.

            </div>
        </S.TaskWrapper>
    );
};
