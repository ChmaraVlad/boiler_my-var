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


export const Task5: FC<PropTypes> = () => {
    useEffect(() => {
        function isPositive(n: number) {
            if (typeof n !== 'number') {
                throw new Error('parameter type is not a Number');
            }
            if (n > 0) {
                return true;
            }

            return false;
        }
        const array: number[] = [ 1, 2, -4, 3, -9, -1, 7 ];

        function newArrayOnlyPositiveValues(array : number[]) {
            let newArray = [];
            for (let i = 0; i < array.length; i++) {
                if (isPositive(array[ i ])) {
                    newArray.push(array[ i ]);
                }
            }

            return newArray;
        }
        console.log('Task 5');
        console.log(isPositive(-3)); // false
        console.log(newArrayOnlyPositiveValues(array));

        isPositive(3); // true
        // isPositive('s'); // Error: parameter type is not a Number
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Task 5</h3>
            <div>
                Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
                * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
                * Создайте для этого вспомогательную функцию `isPositive(-3)`,
                * которая параметром будет принимать число и возвращать true,
                * если число положительное, и false — если отрицательное.
                <p>
                    Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
                    * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
                    * Создайте для этого вспомогательную функцию `isPositive(-3)`,
                    * которая параметром будет принимать число и возвращать true,
                    * если число положительное, и false — если отрицательное. <br />
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
