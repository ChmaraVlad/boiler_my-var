// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../../components';
import { StudentRegistrationComponent } from '../../../components/ReactPractice/StudentRegistrationComponent';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const StudentRegistration: FC<PropTypes> = () => {
    return (
        <S.Container>
            <h1>
                Student Registration Page
            </h1>
            <S.Articles>
                <h2>Домашнее задание No1</h2>
                <p>
                    В этом задании нужно создать форму для регистрации студента. Для этого нужно создать
                    компонент StudentRegistration . Затем для этого компонента нужно добавить роутер
                    /registration
                </p>
                <S.List>
                    Список полей:
                    <li>firstName</li>
                    <li>surname</li>
                    <li>age</li>
                    <li>email</li>
                    <li>sex</li>
                    <li>speciality</li>
                </S.List>
                <S.List>
                    Обратите внимание
                    <li>Валидацию для этого задания делать не нужно</li>
                    <li>Поля firstName, surname по типу должны быть строкой</li>
                    <li>Поле age по типу должно быть числом</li>
                    <li>Поле email по типу должно быть email</li>
                    <li>Поле sex должно быть набором из двух radibutton элементов: male или female</li>
                    <li>Поле speciality должно быть dropdown списком элементов. Список вариантов:
                        designer, developer, writer
                    </li>
                    <li>Для всех полей нужно создать label элемент</li>
                    <li>После отправки формы, нужно вывести в консоли объект с данными.</li>
                </S.List>
            </S.Articles>
            <S.Articles>
                <h2>Домашнее задание No2</h2>
                <p>
                    В этом задании нужно улучшить форму для регистрации студента. Для этого нужно
                    добавить валидацию.
                </p>
                <S.List>
                    Правила для валидации:
                    <ul>
                        <li>Все поля кроме age обязательные</li>
                        <li>Все поля должны проверятся по типу и по содержимому</li>
                        <li>Поле age должно быть больше 6 и меньше 60</li>
                    </ul>
                </S.List>
                <S.List>
                    Обратите внимание
                    <li>В этом задании нельзя использовать сторонние валидаторы. В том числе нельзя
                        использовать yup
                    </li>
                    <li>В случае ошибки нужно выводить крассную рамку вокрух инпута и label элементов, а
                        также текст ошибки.
                    </li>
                    <li>Тип инпута или допустимое значение можно прочитать в задании No1</li>
                    <li>Для валидации email нужно использовать регулярное выражение ^[A-Z0-9._%+-
                        ]+@[A-Z0-9.-]+\.[A-Z]{'2, 4'}$
                    </li>
                </S.List>
            </S.Articles>
            <S.Articles>
                <h2>Домашнее задание No3</h2>
                <p>
                    В этом задании нужно улучшить форму для регистрации студента. Для этого нужно
                    реализовать валидацию с помощью yup
                </p>
                <S.List>
                    Обратите внимание
                    <li>Правила валидации не меняются</li>
                    <li>Валидацию из предыдущего урока нужно удалить</li>
                </S.List>
            </S.Articles>
            <StudentRegistrationComponent />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <StudentRegistration />
    </ErrorBoundary>
);
