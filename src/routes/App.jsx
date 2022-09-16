import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import PasswordChange from '../containers/PasswordChange';
import PasswordRecovery from '../pages/PasswordRecovery';
import Login from '../containers/Login';
import SignIn from '../containers/SignIn';
import EditProfile from '../containers/EditProfile';
import ProductGallery from '../containers/ProductGallery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import LogOut from '../containers/LogOut';
import SideMenu from '../containers/SideMenu';
import '@styles/global.scss';
import PurchaseOrder from '../containers/PurchaseOrder';
import PurchaseHistory from '../containers/PurchaseHistory';
import ProductDetail from '../components/ProductDetail';
import CheckOut from '../containers/CheckOut';
import AppContext from '../context/AppContext';
import useInitialState from '@hooks/useInitialState';
import GalleryItem from '@components/GalleryItem';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState} >
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
                        <Route exact path="/LogOut" element={<LogOut />} />
                        <Route exact path="/SideMenu" element={<SideMenu />} />
                        <Route exact path="/PurchaseOrder" element={<PurchaseOrder />} />
                        <Route exact path="/PurchaseHistory" element={<PurchaseHistory />} />
                        <Route exact path="/ProductDetail" element={<ProductDetail />} />
                        <Route exact path="/CheckOut" element={<CheckOut />} />
                        <Route exact path='/GalleryItem' element={<GalleryItem />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;