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

export const Task4: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 4');


        // class Stringer extends Array {
        //     constructor() {
        //         super();
        //     }

        //     reverse(str) {
        //         return str.split('').reverse()
        //             .join('');
        //     }

        //     uppercaseFirst(str) {
        //         return str[ 0 ].toUpperCase() + str.substring(1);
        //     }

        //     uppercaseAll(str) {
        //         return str.split(' ').map((item) => item[ 0 ].toUpperCase() + item.substring(1))
        //             .join(' ');
        //     }
        // }


        // const stringer = new Stringer();


        // console.log(stringer.reverse('good morning!')); // !gninrom doog
        // console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
        // console.log(stringer.uppercaseAll('good morning!')); // Good Morning!
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 4.</h1>
            <div>
                * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
                *
                * - reverse(string) — возвращает строку в перевернутом виде;
                * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
                * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
                *
                * Условия:
                * - Реализация решения — это синтаксис современных классов JavaScript.
                */
            </div>
        </S.TaskWrapper>
    );
};
