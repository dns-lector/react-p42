import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../../pages/_layout/Layout';
import Home from '../../pages/home/Home';
import Group from '../../pages/group/Group';
import NotFound from '../../pages/not_found/NotFound';
import AppContext from '../../features/_context/AppContext';
import Cart from "../../pages/cart/Cart";
import type ICartItem from "../../entities/cart/model/ICartItem";

export default function App() {
    const [cart, setCart] = useState<Array<ICartItem>>([]);

    return (
    <AppContext.Provider value={{cart, setCart}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="group/:slug" element={<Group />} />

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </AppContext.Provider>
    );
}
/*
Д.З. Розробити компонент (feature) на базі checkbox
(switch).
Додати до компонента Counter новий компонент
з текстом "не телефонувати"
*/