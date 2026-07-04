import { useEffect, useState } from 'react';
import './ui/Auth.css';

export default function Auth() {
    const [pageMode, setPageMode] = useState<string>("signIn");

    return <div className='auth-container'>
        <div className='auth-form'>
            <h2 className='auth-header'>
                {pageMode == "signIn" ? "Форма входу" : "Реєстрація"}
            </h2>
            <div className='d-flex justify-content-between mx-2 gap-2'>
                <button className={`flex-1 btn ${pageMode == "signIn" ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPageMode("signIn")}>Вхід</button>
                <button className={`flex-1 btn ${pageMode == "signUp" ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setPageMode("signUp")}>Реєстрація</button>
            </div>
            {pageMode == "signIn" ? <SignIn /> : <SignUp />}
        </div>
    </div>;
}

function SignIn() {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormValid, setFormValid] = useState<boolean>(false);

    useEffect(() => {
        setFormValid(
            login.length > 2 &&   // Валідація 
            password.length > 2   // форми
        );
    }, [login, password]);

    return <div className='auth-form-content'>
        <input type='text' placeholder='Логін' value={login} onChange={e => setLogin(e.target.value)} />
        <input type='password' placeholder='********' value={password} onChange={e => setPassword(e.target.value)} />
        <button className='btn btn-secondary'>Вхід</button>
    </div>;
}

function SignUp() {
    return <>SignUp</>;
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
*/