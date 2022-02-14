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


        // function collect(array: []) {
        //     if (arguments.length > 1) {
        //         throw new Error('must be only 1 parametr');
        //     }
        //     if (!Array.isArray(array)) {
        //         throw new Error('parametr must be an array');
        //     }
        //     let flated = array.flat(Infinity);
        //     let filtered = flated.filter((item) => {
        //         if (typeof item === 'number' || Array.isArray(item)) {
        //             return item;
        //         }
        //         console.log(item);
        //         throw new Error('some item is not a number or array');
        //     });
        //     let res = filtered.reduce((previousValue, currentValue) => {
        //         return previousValue + currentValue;
        //     }, 0);

        //     return res;
        // }


        // let array1 = [[[ 1 ], [ 1, '2' ]], [[ 2, { 1: '1' }], [ 1, 2 ]]];
        // console.log(collect(array1)); // 12

        // array1 = [[[ 1, 2 ], [ 1, 2 ]], [[ 2, 1 ], [ 1, 2 ]]];
        // console.log(collect(array1)); // 12

        // const array2 = [[[[[ 1, 2 ]]]]];
        // console.log(collect(array2)); // 3

        // const array3 = [[[[[ 1, 2 ]]], 2 ], 1 ];
        // console.log(collect(array3)); // 6

        // const array4 = [[[[[]]]]];
        // console.log(collect(array4)); // 0

        // const array5 = [[[[[], 3 ]]]];
        // console.log(collect(array5)); // 3
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
                * и возвращать число.
                * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
                * Число, которое возвращает функция должно быть суммой всех элементов
                * на всех уровнях всех вложенных массивов.
                *
                * Если при проходе всех уровней не было найдено ни одного числа,
                * то функция должна возвращать число 0.
                *
                * Условия:
                * - Обязательно использовать встроенный метод массива reduce.
                *
                * Генерировать ошибки, если:
                * - При вызове функции не был передан один аргумент;
                * - В качестве первого аргумента был передан не массив;
                * - Если на каком-то уровне было найдено не число и не массив.
                */
            </div>
        </S.TaskWrapper>
    );
};
