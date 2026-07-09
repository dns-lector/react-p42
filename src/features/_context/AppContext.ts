import { createContext } from "react";
import type IAppContext from "./model/IAppContext";

const AppContext = createContext<IAppContext>({
    cart: {
        cartItems: [],
        price: 0,
    },
    setCart(_) {
        throw "setCart: Not implemented";
    },
    user: undefined,
    setUser(_) {
        throw "setUser: Not implemented";
    },
});

export default AppContext;

/*
Контекст (оточення, окіл) - спільне середовище, 
в середині якого створюється можливість доступу
до даних, зокрема, до кошику споживача
*/