// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const ReactLesson4: FC<PropTypes> = () => {
    return (
        <S.Container>
            <div>
                <h1>Домашнее задание No1</h1>
                <p>
                    В этом задании необходимо создать компонет Contacts внутри директории components с
                    содержимым <p>My email: contact@gmail.com</p>
                </p>
                <p>
                    Затем необходимо создать компонент Contacts внутри директории pages , данный
                    компонент должен подключать и рендерить компонент Contacts из директории
                    components .
                </p>
                <p>
                    После этого необходимо добавить в файл book.js поле contacts которое будет отвечать
                    за роут /contacts
                </p>
                <p>
                    Затем необходимо в файле navigation/index.js добавить отображение компонента
                    pages/contacts для роута book.contacts .
                </p>
                <p>
                    Обратите внимание <br />
                    При подключении компонента components/contacts к компоненту pages/contacts
                    необходимо создать алиас.
                    Пример алиаса: import { 'News as NewsComponent' } from '../../components/news';
                </p>
            </div>
            <div>
                <h1>Домашнее задание No2</h1>
                <p>
                    В этом задании необходимо создать компонет Secret внутри директории components с
                    содержимым `My Secret: { 'value' }`
                </p>
                <p>
                    Поле value компонент должен получать из текущего роута как результат работы
                    динамического поля.
                </p>
                <p>
                    Затем необходимо создать компонент Secret внутри директории pages , данный
                    компонент должен подключать и рендерить компонент Secret из директории
                    components .
                </p>
                <p>
                    После этого необходимо добавить в файл book.js поле secret которое будет отвечать за
                    роут /secret/:value
                </p>
                <p>
                    Затем необходимо в файле navigation/index.js добавить отображение компонента
                    pages/secret для роута book.secret .
                </p>
                <p>
                    Обратите внимание <br />
                    При подключении компонента components/secret к компоненту pages/secret
                    необходимо создать алиас.
                    Пример алиаса: import { 'News as NewsComponent' } from '../../components/news';
                    Для чтения динамических параметров из текущего роута необходимо использовать
                    внутри компонента components/secret специальный хук useParams() из пакета
                    react-router-dom
                </p>
            </div>
        </S.Container>
    );
};
