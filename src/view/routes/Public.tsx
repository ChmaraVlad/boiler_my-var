// Core
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import { Main, Register, Items, Item } from '../pages';
import LessonsMap from '../pages/LessonsMap';
import LessonReact from '../pages/LessonReact';
import News from '../pages/News';
import NoMatch from '../pages/NoMatch';

//LessonsJavaScript
import LessonsJavaScript from '../pages/LessonsJavaScript';
import Lesson1 from '../pages/LessonsJavaScript/Lesson1';
import Lesson2 from '../pages/LessonsJavaScript/Lesson2';
import Lesson3 from '../pages/LessonsJavaScript/Lesson3';
import Lesson4 from '../pages/LessonsJavaScript/Lesson4';
import Lesson5 from '../pages/LessonsJavaScript/Lesson5';
import Lesson6 from '../pages/LessonsJavaScript/Lesson6';
import Lesson7 from '../pages/LessonsJavaScript/Lesson7';
import Lesson8 from '../pages/LessonsJavaScript/Lesson8';
import Lesson9 from '../pages/LessonsJavaScript/Lesson9';
import Lesson10 from '../pages/LessonsJavaScript/Lesson10';
import Lesson11 from '../pages/LessonsJavaScript/Lesson11';
import Lesson12 from '../pages/LessonsJavaScript/Lesson12';
import Lesson13 from '../pages/LessonsJavaScript/Lesson13';
import Lesson14 from '../pages/LessonsJavaScript/Lesson14';
import Lesson15 from '../pages/LessonsJavaScript/Lesson15';
import Lesson16 from '../pages/LessonsJavaScript/Lesson16';
import Lesson17 from '../pages/LessonsJavaScript/Lesson17';
import Lesson18 from '../pages/LessonsJavaScript/Lesson18';
import Lesson19 from '../pages/LessonsJavaScript/Lesson19';
import Lesson20 from '../pages/LessonsJavaScript/Lesson20';
import Lesson21 from '../pages/LessonsJavaScript/Lesson21';
import Lesson22 from '../pages/LessonsJavaScript/Lesson22';

// Components
import { Accordion } from '../components/Accordion';


export const Public: FC = () => {
    return (
        <section>
            <Routes>
                <Route
                    element = { <Main /> }
                    path = '/'>
                    <Route
                        element = { <Register /> }
                        path = 'register'
                    />
                    <Route
                        element = { <Items /> }
                        path = 'items'>
                        <Route
                            element = { <Item /> }
                            path = ':id'
                        />
                    </Route>
                    <Route
                        element = { <LessonsMap /> }
                        path = 'lessons'>
                        <Route
                            element = { <LessonsJavaScript /> }
                            path = 'js'>
                            <Route
                                element = { <Lesson1 /> }
                                path = '1'
                            />
                            <Route
                                element = { <Lesson2 /> }
                                path = '2'
                            />
                            <Route
                                element = { <Lesson3 /> }
                                path = '3'
                            />
                            <Route
                                element = { <Lesson4 /> }
                                path = '4'
                            />
                            <Route
                                element = { <Lesson5 /> }
                                path = '5'
                            />
                            <Route
                                element = { <Lesson6 /> }
                                path = '6'
                            />
                            <Route
                                element = { <Lesson7 /> }
                                path = '7'
                            />
                            <Route
                                element = { <Lesson8 /> }
                                path = '8'
                            />
                            <Route
                                element = { <Lesson9 /> }
                                path = '9'
                            />
                            <Route
                                element = { <Lesson10 /> }
                                path = '10'
                            />
                            <Route
                                element = { <Lesson11 /> }
                                path = '11'
                            />
                            <Route
                                element = { <Lesson12 /> }
                                path = '12'
                            />
                            <Route
                                element = { <Lesson13 /> }
                                path = '13'
                            />
                            <Route
                                element = { <Lesson14 /> }
                                path = '14'
                            />
                            <Route
                                element = { <Lesson15 /> }
                                path = '15'
                            />
                            <Route
                                element = { <Lesson16 /> }
                                path = '16'
                            />
                            <Route
                                element = { <Lesson17 /> }
                                path = '17'
                            />
                            <Route
                                element = { <Lesson18 /> }
                                path = '18'
                            />
                            <Route
                                element = { <Lesson19 /> }
                                path = '19'
                            />
                            <Route
                                element = { <Lesson20 /> }
                                path = '20'
                            />
                            <Route
                                element = { <Lesson21 /> }
                                path = '21'
                            />
                            <Route
                                element = { <Lesson22 /> }
                                path = '22'
                            />

                        </Route>
                        <Route
                            element = { <LessonReact /> }
                            path = 'react'>
                            <Route
                                element = { <News /> }
                                path = '1'
                            />
                            <Route
                                element = { <Accordion /> }
                                path = '2'
                            />
                            <Route
                                element = { <Lesson3 /> }
                                path = '3'
                            />
                            <Route
                                element = { <Lesson4 /> }
                                path = '4'
                            />
                            <Route
                                element = { <Lesson5 /> }
                                path = '5'
                            />
                            <Route
                                element = { <Lesson6 /> }
                                path = '6'
                            />
                            <Route
                                element = { <Lesson7 /> }
                                path = '7'
                            />
                            <Route
                                element = { <Lesson8 /> }
                                path = '8'
                            />
                        </Route>
                    </Route>
                </Route>
                <Route
                    element = { <NoMatch /> }
                    path = '*'
                />
            </Routes>
        </section>
    );
};
