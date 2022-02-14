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

        const postpone = (start, end, delay) => {
            if (typeof start !== 'number'
                && typeof end !== 'number'
                && typeof delay !== 'number'
            ) {
                throw new Error('all params neet to be typeof number');
            }
            let count = start;

            if (start > end) {
                let timerId = setTimeout(function tick() {
                    if (count >= end) {
                        console.log(count);
                        timerId = setTimeout(tick, delay);
                    } else {
                        clearTimeout(timerId);
                    }
                    count--;
                }, delay);
            } else {
                let timerId = setTimeout(function tick() {
                    if (count <= end) {
                        console.log(count);
                        timerId = setTimeout(tick, delay);
                    } else {
                        clearTimeout(timerId);
                    }
                    count++;
                }, delay);
            }
        };


        postpone(1, 3, 3000);
        // 1
        // 2
        // 3
        postpone(3, 1, 3000);
        // 3
        // 2
        // 1
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                *
                * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
                *
                * Функция принимает 3 параметра:
                * - Первый параметр `start` — число, c которого начнется отсчет;
                * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
                * - Третий параметр `delay` — это время в `мс` между выводами.
                *
                * Условия:
                * - Функция принимает три параметра;
                * - Функция содержит валидацию входных параметров на тип number;
                * - Обязательно использование таймера setTimeout и цикла for;
                * - Функция должна уметь считать в обе стороны.
                */
            </div>
        </S.TaskWrapper>
    );
};
