import { useEffect, useState } from 'react';
import './ui/GroupsWidget.css';
import type IGroup from '../../entities/group/model/IGroup';
import GroupApi from '../../entities/group/api/GroupApi';

export default function GroupsWidget() {
    const [groups, setGroups] = useState<Array<IGroup>>([]);

    useEffect(() => {
        GroupApi.allGroups().then(setGroups);
    }, []);

    return <div>
        <div className='groups-container'>
            {groups.map(g => <div>{g.name}</div>)}
        </div>
    </div>;
}