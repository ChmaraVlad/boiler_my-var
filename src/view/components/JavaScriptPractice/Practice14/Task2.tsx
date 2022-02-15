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

class CleanerRobot {
    MAX_ENERGY_CAPACITY: number = 100; /* Максимальная ёмкость батареи. */
    energy: number = 0;
    constructor(initialEnergy = 0 /* Изначальный заряд батареи */) {
        this.setEnergy(initialEnergy);
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(a: number) {
        // Решение
        if (typeof a !== 'number') {
            throw new Error('type string');
        } else if (a < 0) {
            throw new Error('New energy level can not be less than 0. ');
        } else if (a > 100) {
            throw new Error('New energy level can not be more than 100. ');
        }
        this.energy = a;

        return this.energy;
    }
}

const cleanerRobot = new CleanerRobot(22);

export const Task2: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 2');

        /* Текущий заряд батареи: 22 */
        console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

        cleanerRobot.setEnergy(55);

        /* Текущий заряд батареи: 55 */
        console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

        try {
            new CleanerRobot(-1);
        } catch (error) {
            if (error instanceof Error) {
                /* Error: New energy level can not be less than 0. */
                console.log(`${error.name}: ${error.message}`);
            }
        }

        try {
            cleanerRobot.setEnergy(-22);
        } catch (error) {
            /* Error: New energy level can not be less than 0. */
            if (error instanceof Error) {
                console.log(`${error.name}: ${error.message}`);
            }
        }

        try {
            cleanerRobot.setEnergy(101);
        } catch (error) {
            /* Error: New energy level can not be more than 100. */
            if (error instanceof Error) {
                console.log(`${error.name}: ${error.message}`);
            }
        }

        // interface IntCleanRobot {
        //     this: void;
        //     initialEnergy: Number;
        // }

        // function CleanerRobot: IntCleanRobot (initialEnergy = 0 /* Изначальный заряд батареи */) {
        //     this.getEnergy = getEnergy;
        //     this.setEnergy = setEnergy;

        //     const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
        //     let energy = null;

        //     this.setEnergy(initialEnergy);

        //     function getEnergy() {
        //         // Решение
        //         return energy;
        //     }
        //     function setEnergy(a) {
        //         // Решение
        //         if (typeof a !== 'number') {
        //             throw new Error('type string');
        //         } else if (a < 0) {
        //             throw new Error('New energy level can not be less than 0. ');
        //         } else if (a > 100) {
        //             throw new Error('New energy level can not be more than 100. ');
        //         }

        //         return energy = a;
        //     }
        // }

        // const cleanerRobot = new CleanerRobot(22);

        // /* Текущий заряд батареи: 22 */
        // console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

        // cleanerRobot.setEnergy(55);

        // /* Текущий заряд батареи: 55 */
        // console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

        // try {
        //     new CleanerRobot(-1);
        // } catch (error) {
        //     /* Error: New energy level can not be less than 0. */
        //     console.log(`${error.name}: ${error.message}`);
        // }

        // try {
        //     cleanerRobot.setEnergy(-22);
        // } catch (error) {
        //     /* Error: New energy level can not be less than 0. */
        //     console.log(`${error.name}: ${error.message}`);
        // }

        // try {
        //     cleanerRobot.setEnergy(101);
        // } catch (error) {
        //     /* Error: New energy level can not be more than 100. */
        //     console.log(`${error.name}: ${error.message}`);
        // }
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 2.</h1>
            <div>
                * Добавьте роботу геттер и сеттер для приватного свойства energy.
                * Нужно, чтобы внешний код мог узнать заряд батареи робота.
                *
                * Условия:
                * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.
                *
                * Генерировать ошибки если:
                * - новый заряд батареи устанавливается в значении меньшем, чем 0;
                * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
                * - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
                */
            </div>
        </S.TaskWrapper>
    );
};
