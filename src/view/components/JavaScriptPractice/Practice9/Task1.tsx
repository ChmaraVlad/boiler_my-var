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

        // function shallowMerge(obj1, obj2) {
        //     if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        //         throw new TypeError('parametr must be an oobject');
        //     }

        //     return  Object.defineProperties({}, {
        //         ...Object.getOwnPropertyDescriptors(obj1),
        //         ...Object.getOwnPropertyDescriptors(obj2),
        //     });
        // }

        // const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
        // const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

        // Object.defineProperty(user, 'firstName', { writable: false });
        // Object.defineProperty(userData, 'job', { configurable: false });

        // const result = shallowMerge(user, userData);

        // console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
        // console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
        // console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                * Создайте функцию shallowMerge.
                * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
                * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
                * Свойства необходимо копировать лишь на один уровень каждого их объектов.
                *
                * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
                *
                * Условия:
                * - Встроенный метод Object.create() использовать запрещено;
                * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
                * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
                */
            </div>
        </S.TaskWrapper>
    );
};
