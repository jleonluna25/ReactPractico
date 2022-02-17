import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import PasswordChange from '../containers/PasswordChange';
import PasswordRecovery from '../containers/PasswordRecovery';
import Login from '../containers/Login';
import SignIn from '../containers/SignIn';
import EditProfile from '../containers/EditProfile';
import ProductGallery from '../components/ProductGallery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Login" element={<Login />} />
                    <Route exact path="/PasswordRecovery" element={<PasswordRecovery />} />
                    <Route exact path="/PasswordChange" element={<PasswordChange />} />
                    <Route exact path="/SignIn" element={<SignIn />} />
                    <Route exact path="/EditProfile" element={<EditProfile />} />
                    <Route exact path="/ProductGallery" element={<ProductGallery />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;