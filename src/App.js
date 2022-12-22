import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import './App.css';
import { PublicRoute } from './router';
import { DefaultLayout } from './layouts';
import Modal from './components/Modal';
import StatePopup from './components/StatePopup';
import { Consumer } from './Context';

function App() {
    const [isLogin] = Consumer().isLogin;
    const [isLogedin, setIsLogedin] = useState(false);

    useEffect(() => {
        if (isLogin) {
            setIsLogedin(true);
            setTimeout(() => setIsLogedin(false), 2000);
        }
    }, [isLogin]);
    return (
        <Router>
            <Modal />
            {isLogedin ? <StatePopup content="Đăng nhập thành công !" /> : ''}
            <Routes>
                {PublicRoute.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) Layout = route.layout;
                    else if (route.layout === null) Layout = Fragment;
                    const Element = route.element;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
