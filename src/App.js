import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import { PublicRoute } from './router';
import { DefaultLayout } from './layouts';
import Modal from './components/Modal';

function App() {
    return (
        <Router>
            <Modal />
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
