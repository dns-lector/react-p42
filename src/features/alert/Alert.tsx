import { useContext } from 'react';
import './ui/Alert.css';
import AppContext from '../_context/AppContext';
import type IAlertData from './model/IAlertData';

export default function Alert({data}:{data:IAlertData}) {
    const {showAlert} = useContext(AppContext);

    return <div className='alert-bg'>
        <div className='alert-fg'>
            {data.message}
            {data.buttons && data.buttons.length > 0
            ? data.buttons.map(btn => <button key={btn.title} onClick={btn.action}>{btn.title}</button>)
            : <button onClick={() => showAlert(null)}>Close</button>
            }
            
        </div>
    </div>;
}
/*
Д.З. Реалізувати відображення на модальному вікні Alert
заголовку повідомлення та його тексту
Впровадити стилізацію модального вікна
*/