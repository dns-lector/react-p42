import '../../shared/extensions/NumberExtensions';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from '../../pages/_layout/Layout';
import Home from '../../pages/home/Home';
import Group from '../../pages/group/Group';
import NotFound from '../../pages/not_found/NotFound';
import AppContext from '../../features/_context/AppContext';
import Cart from "../../pages/cart/Cart";
import type ICart from "../../entities/cart/model/ICart";
import CartApi from "../../entities/cart/api/CartApi";
import Auth from '../../pages/auth/Auth';

export default function App() {
    const [cart, setCart] = useState<ICart>({cartItems: [], price: 0});

    const updateCart = (cart:ICart):void => {
        // перед зміною стану здійснюємо запит на обчислення знижок по кошику
        CartApi.calculateCart(cart)
        .then(setCart);
    }

    return (
    <AppContext.Provider value={{cart, setCart: updateCart}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="auth" element={<Auth />} />
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