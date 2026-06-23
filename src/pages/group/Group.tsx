import { useParams } from 'react-router-dom';
import './ui/Group.css';
import { useEffect, useState } from 'react';
import type IGroupProduct from '../../entities/group/model/IGroupProduct';
import GroupApi from '../../entities/group/api/GroupApi';

export default function Group() {
    const {slug} = useParams();
    const [groupProduct, setGroupProduct] = useState<IGroupProduct|undefined>();

    useEffect(() => {
        GroupApi.groupDetails(slug!).then(setGroupProduct);
    }, []);

    return <div>
        <h1>{slug}</h1>
        {groupProduct
        ?<p>{groupProduct.products.length}</p>
        :<p>Loading...</p>}
    </div>
}
