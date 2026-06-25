import { useEffect, useRef, useState } from 'react';
import './ui/GroupsWidget.css';
import type IGroup from '../../entities/group/model/IGroup';
import GroupApi from '../../entities/group/api/GroupApi';

export default function GroupsWidget() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);
    const cropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        GroupApi.allGroups().then(setGroups);
    }, []);

    const leftButtonClick = () => {
        let sr = cropRef.current.scrollWidth - 
            cropRef.current.scrollLeft - 
            cropRef.current.clientWidth;
        console.log(
            cropRef.current.clientWidth, 
            cropRef.current.scrollLeft, 
            cropRef.current.scrollWidth,
            sr
        );
        cropRef.current.scrollLeft = -100;
        // let pl = cropRef.current.style.paddingLeft;
        // cropRef.current.style.paddingLeft = Number(pl) - 100 + 'px';
    };

    return <div>
        <button className='btn btn-outline-secondary' onClick={leftButtonClick}>
            <i className="bi bi-caret-left"></i>
        </button>

        <div className='groups-crop' ref={cropRef}>
            <div className='groups-container'>
                {groups.map(g => <div key={g.id}>
                    <img src={g.imageUrl} alt={g.name} />
                    {g.name}
                </div>)}
            </div>
        </div>

        <button className='btn btn-outline-secondary'>
            <i className="bi bi-caret-right"></i>
        </button>
    </div>;
}
/*
Д.З. Реалізувати відображення підказок при затриманні миші на 
віджеті товарних груп. Включити до підказки опис групи
* "Перехід до групи" + назва групи + опис групи (з нового рядка)
*/