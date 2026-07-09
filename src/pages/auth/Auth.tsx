import { useContext, useEffect, useState } from 'react';
import './ui/Auth.css';
import SignUp from './ui/sign_up/SignUp';
import UserApi from '../../entities/user/api/UserApi';
import AppContext from '../../features/_context/AppContext';
import Profile from './ui/profile/Profile';
import { rememberUser } from '../../entities/user/lib/UserLib';

const PageModes = {
    signIn: 'signIn',
    signUp: 'signUp',
    profile: 'profile',
    forgotPassword: 'forgotPassword',
} as const;

type PageModes = (typeof PageModes)[keyof typeof PageModes];


export default function Auth() {
    const {user} = useContext(AppContext);

    const [pageMode, setPageMode] = useState<PageModes>(user ? PageModes.profile : PageModes.signIn);

    return user ? <Profile /> : <div className='auth-container'>
        <div className='auth-form'>
            <h2 className='auth-header'>
                {pageMode == PageModes.signIn ? "Форма входу" : "Реєстрація"}
            </h2>
            <div className='d-flex justify-content-between mx-3 gap-3'>
                <button className={`flex-1 btn ${pageMode == PageModes.signIn ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPageMode("signIn")}>Вхід</button>
                <button className={`flex-1 btn ${pageMode == PageModes.signUp ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPageMode("signUp")}>Реєстрація</button>
            </div>
            {pageMode == PageModes.signIn ? <SignIn /> : <SignUp />}
        </div>
    </div>;
}

function SignIn() {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormValid, setFormValid] = useState<boolean>(false);
    const {setUser} = useContext(AppContext);

    useEffect(() => {
        setFormValid(
            login.length > 2 &&   // Валідація 
            password.length > 2   // форми
        );
    }, [login, password]);

    const signInClick = () => {
        UserApi.authenticate(login, password)
        .then(u => {
            // if(rememberMe)
            // забезпечуємо збереження даних користувача у постійному сховищі браузера
            rememberUser(u);
            setUser(u);
        })
        .catch(err => {
            if(err === 401) {
                alert("У вході відмовлено. Перевірьте введені дані")
            }
        });
    };

    return <div className='auth-form-content mx-3 my-4'>
        <div className="input-group mb-3">
            <span className="input-group-text" id="login-addon"><i className="bi bi-lock"></i></span>
            <input className="form-control"
                type='text' placeholder='Логін' 
                value={login} onChange={e => setLogin(e.target.value)}
                aria-label="Username" aria-describedby="login-addon" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="password-addon"><i className="bi bi-key"></i></span>
            <input className="form-control"
                type='password' placeholder='********'
                value={password} onChange={e => setPassword(e.target.value)}
                aria-label="Password" aria-describedby="password-addon" />
        </div>
        
        <button 
            className={`btn ${isFormValid ? 'btn-primary' : 'btn-secondary'}`}
            onClick={isFormValid ? signInClick : undefined}>
                Вхід
        </button>
    </div>;
}

/*
Робота з формами на прикладі задач "Auth"

Автентифікація (Sign In, authentication) - задача підтвердження ідентичності 
 (особи, пристрою, вузла тощо) зазвичай, за допомогою секретних даних (паролів).
 В результаті успішної автентифікації видається цифрове "посвідчення" (token)

Авторизація (authorization) - процес перевірки токену, що передається у складі
 запиту, та прийняття рішення щодо допуску або недопуску до запитуваних даних. 

Реєстрація (Sign Up, Registration) - запит на створення нового користувача
 шляхом передачі необхідних даних

Забув пароль - задача відновлення паролю

Д.З. Додати режим "Забув пароль" до форми сторінки Auth
Реалізувати два поля введення: пошта та дата (народження)
Забезпечити блокування кнопки форми до введення усіх даних

*/