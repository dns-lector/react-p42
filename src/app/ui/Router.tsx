import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../pages/_layout/Layout";
import Home from "../../pages/home/Home";
import Auth from "../../pages/auth/Auth";
import Cart from "../../pages/cart/Cart";
import Group from "../../pages/group/Group";
import NotFound from "../../pages/not_found/NotFound";

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="auth" element={<Auth />} />
                <Route path="cart" element={<Cart />} />
                <Route path="group/:slug" element={<Group />} />

                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>;
}