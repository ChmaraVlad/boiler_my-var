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
                    element = { <News /> }
                    path = 'news'>

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
                    </Route>
                    <Route
                        element = { <LessonReact /> }
                        path = 'react'>
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
