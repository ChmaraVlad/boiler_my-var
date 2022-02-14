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

        const person = {
            rate: 0,
            salary(): number {
                if (this.rate === undefined) {
                    return 0;
                }

                return this.rate * new Date().getDate();
            },
        };
        Object.defineProperty(person, 'rate', {
            configurable: false,
            enumerable:   false,
            writable:     true,
        });
        person.rate = 30;
        console.log(person.salary());
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
                Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
                Свойство `salary` можно читать, но нельзя менять.
                При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
                Если rate не установлен — возвращаем число 0.
            </div>
        </S.TaskWrapper>
    );
};
