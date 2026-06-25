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
        <div className='groups-crop'>
            <div className='groups-container'>
                {groups.map(g => <div key={g.id}>
                    <img src={g.imageUrl} alt={g.name} />
                    {g.name}
                </div>)}
            </div>
        </div>
    </div>;
}