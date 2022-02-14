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

export const Task14: FC<PropTypes> = () => {
    useEffect(()=>{
        let n = 1000;
        console.log('Task 14');

        for (let i = 0, num = 0; i <= num; ++i) {
            if (n > 50) {
                n /= 2;
                num++;
            } else if (n <= 50) {
                console.log(`num = ${num} , n = ${n}`);
                break;
            }
        }
    }, []);

    return (
        <S.TaskWrapper>
            <h3>Component: Task 14</h3>
            <div>
                Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
                <p>
                    Результат проверки выводиться в консоли. Решение находиться в теле этого компонента.
                </p>
            </div>
        </S.TaskWrapper>
    );
};
