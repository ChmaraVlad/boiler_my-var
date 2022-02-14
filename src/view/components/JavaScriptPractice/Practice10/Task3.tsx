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

        // function calculateAdvanced(...cbs) {
        //     const results = [];
        //     const errors = [];
        //     cbs.forEach((func, index) => {
        //         if (typeof func !== 'function') {
        //             throw new Error('Invalid params, must be a cb');
        //         }
        //         let arg = results[ results.length - 1 ];

        //         try {
        //             let result = index === 0 ? func() : func(arg);
        //             if (typeof result === 'undefined') {
        //                 throw new Error(
        //                     `callback at index ${index} did not return any value.`,
        //                 );
        //             }
        //             results.push(result);
        //         } catch (e) {
        //             errors.push({
        //                 index:   index,
        //                 name:    e.name,
        //                 message: e.message,
        //             });
        //         }
        //     });

        //     return {
        //         value:  results[ results.length - 1 ],
        //         errors: errors,
        //     };
        // }
        // const result = calculateAdvanced(
        //     () => {},
        //     () => {
        //         return 7;
        //     },
        //     () => {},
        //     (prevResult) => {
        //         return prevResult + 4;
        //     },
        //     () => {
        //         throw new RangeError('Range is too big.');
        //     },
        //     (prevResult) => {
        //         return prevResult + 1;
        //     },
        //     () => {
        //         throw new ReferenceError('ID is not defined.');
        //     },
        //     (prevResult) => {
        //         return prevResult * 5;
        //     },
        // );

        // console.log(result);
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 3.</h1>
            <div>
                * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
                * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
                *
                * После отлова ошибки перейдите к выполнению следующего коллбека.
                *
                * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
                * - свойство `value` содержит результат вычисления всех функций из цепочки;
                * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
                *     - index — индекс коллбека, на котором ошибка была возбуждена;
                *     - name — имя ошибки;
                *     - message — сообщение ошибки.
                *
                * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
                *
                * Поэтому, для продолжения цепочки выполнения
                * необходимо брать результат последней успешно выполненной функции-коллбека.
                *
                * Генерировать ошибки если:
                * - Любой из аргументов не является функцией.
                */
            </div>
        </S.TaskWrapper>
    );
};
