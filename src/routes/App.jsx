import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/PasswordChange";
import PasswordRecovery from "../containers/PasswordRecovery";
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";
import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/PasswordRecovery" element={<PasswordRecovery />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;