import { useState } from 'react';
import './SignUp.css';

interface IFormData {
    login: string,
    email: string,
    password: string,
    repeat: string,
    isAgree: boolean,
};

const initialFormData:IFormData = {
    login: "",
    email: "",
    password: "",
    repeat: "",
    isAgree: false,
};

export default function SignUp() {
    const [formData, setFormData] = useState<IFormData>(initialFormData);

    const isFormValid:boolean = formData.login.length > 2 &&
        formData.password.length > 2 &&
        formData.email.length > 5 && 
        formData.password == formData.repeat &&
        formData.isAgree;

    return <div className='reg-form-content mx-3 my-4'>
    <div className="input-group mb-3">
        <span className="input-group-text" id="email-addon"><i className="bi bi-lock"></i></span>
        <input className="form-control"
            type='email' placeholder='E-mail' 
            value={formData.email} onChange={e => setFormData({...formData, email:e.target.value})}
            aria-label="User E-mail" aria-describedby="email-addon" />
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text" id="login-addon"><i className="bi bi-lock"></i></span>
        <input className="form-control"
            type='text' placeholder='Логін' 
            value={formData.login} onChange={e => setFormData({...formData, login:e.target.value})}
            aria-label="Username" aria-describedby="login-addon" />
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text" id="password-addon"><i className="bi bi-key"></i></span>
        <input className="form-control"
            type='password' placeholder='********'
            value={formData.password} onChange={e => setFormData({...formData, password:e.target.value})}
            aria-label="Password" aria-describedby="password-addon" />
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text" id="repeat-addon"><i className="bi bi-key-fill"></i></span>
        <input className="form-control"
            type='password' placeholder='********'
            value={formData.repeat} onChange={e => setFormData({...formData, repeat:e.target.value})}
            aria-label="Repeat Password" aria-describedby="repeat-addon" />
    </div>
    
    <button className={`btn ${isFormValid ? 'btn-primary' : 'btn-secondary'}`}>Реєстрація</button>
</div>;
}