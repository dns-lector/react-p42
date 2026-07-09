import { useContext } from 'react';
import './Profile.css';
import AppContext from '../../../../features/_context/AppContext';

export default function Profile() {
    const {user} = useContext(AppContext);

    return <div className='profile-container'>
        {user.login}
    </div>;
}
/*
Д.З. Створити (наповнити) сторінку "Кабінет користувача" (профіль)
Додати кнопку виходу з облікового запису
Включити елементи (чекбокс + кнопка) для видалення профілю
https://gdpr-info.eu/art-17-gdpr/
*/