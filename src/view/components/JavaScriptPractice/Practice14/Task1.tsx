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
    energy: number;

    interval: ReturnType<typeof setInterval> | void = void 0;
    timerId: ReturnType<typeof setTimeout> | void = void 0;

    cleaningSquare: number;
    ENERGY_CONSUMPTION: number;
    CLEANING_SPEED: number;

    constructor(
        initialEnergy = 0 /* Изначальный заряд батареи робота */,
        cleaningSquare: number /* Площадь для уборки в метрах. */,
    ) {
        this.energy = initialEnergy;
        this.cleaningSquare = cleaningSquare;

        this.ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
        this.CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
    }

    getEnergyConsumtion = () =>  this.ENERGY_CONSUMPTION; ;
    getCleaningTime = () => this.cleaningSquare / this.CLEANING_SPEED;
    onReady = () => {
        if (typeof this.interval === 'number') {
            clearTimeout(this.interval);
            console.log(`Уборка завершена. Осталось заряда батареи: ${this.energy}.`);
        }
    }

    setEnergy = (a: number) => {
        if (typeof a !== 'number') {
            throw new Error('not a number');
        }

        return this.energy -= a;
    }

    clean = () => {
        const cleaningTime = this.getCleaningTime();

        console.log(
            `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
        );

        /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */

        this.interval  = setInterval(()=>{
            this.setEnergy(this.getEnergyConsumtion());
        }, 1000);
        this.timerId = setTimeout(this.onReady, cleaningTime * 1000);
    };

    stop = () => {
        if (typeof this.timerId === 'number' && typeof this.interval === 'number') {
            clearTimeout(this.timerId);
            clearTimeout(this.interval);
        }
        console.log(`Остановка процесса уборки... Осталось заряда батареи: ${this.energy}.`);
    }
}
export const Task1: FC<PropTypes> = () => {
    useEffect(()=>{
        console.log('Task 1');

        // ========== js
        // function CleanerRobot (
        //     initialEnergy = 0 /* Изначальный заряд батареи робота */,
        //     cleaningSquare /* Площадь для уборки в метрах. */,
        // ) {
        //     let energy = initialEnergy;

        //     let timerId = 0;
        //     let interval = 0

        //     const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
        //     const getEnergyConsumtion = () =>  ENERGY_CONSUMPTION; ;
        //     const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
        //     const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
        //     const onReady = () => {
        //         console.log(`Уборка завершена. Осталось заряда батареи: ${energy}.`);
        //         clearTimeout(interval)
        //     }


        //     const setEnergy = (a) => {
        //         if(typeof a !== 'number') {
        //             throw new Error('not a number')
        //         }
        //         return energy -= a
        //     }

        //     this.clean = () => {
        //         const cleaningTime = getCleaningTime();

        //         console.log(
        //         `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
        //         );

        //         /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */

        //         interval = setInterval(()=>{
        //             setEnergy(getEnergyConsumtion())
        //         }, 1000)
        //         timerId = setTimeout(onReady, cleaningTime * 1000);
        //     };

        //     this.stop = () => {
        //         clearTimeout(timerId)
        //         clearTimeout(interval)
        //         console.log(`Остановка процесса уборки... Осталось заряда батареи: ${energy}.`);
        //     }

        const cleanerRobot = new CleanerRobot(50, 45);
        cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */
    }, []);

    return (
        <S.TaskWrapper>
            <h1>Задача 1.</h1>
            <div>
                * Дан базовый класс робота-уборщика.
                *
                * Добавьте роботу функционал употребления энергии:
                * - при начале уборки уровень энергии должен уменьшиться;
                * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
                *
                * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
                * В если уборка остановлена раньше времени завершения,
                * onReady сработать не должен, а также нужно вывести другое сообщение.
                *
                * Условия:
                * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
                * - использовать функцию clearTimeout;
                * - идентификатор таймера нужно хранить в приватной переменной конструктора.
                */
            </div>
        </S.TaskWrapper>
    );
};
