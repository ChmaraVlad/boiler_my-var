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

        const person = {
            get salary() {
                let date = new Date();
                let day = date.getDate();

                let lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

                return (lastDayOfMonth - day) > 20 ? 'good salary' : 'bad salary';
            },
        };
        console.log(person.salary);
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                Создайте объект `person` у которого будет одно свойство `salary`.
                * При чтении этого свойства должна возвращаться строка с текстом.
                * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
            </div>
        </S.TaskWrapper>
    );
};
