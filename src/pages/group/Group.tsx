import { useParams } from 'react-router-dom';
import './ui/Group.css';
import { useEffect, useState } from 'react';
import type IGroupProduct from '../../entities/group/model/IGroupProduct';
import GroupApi from '../../entities/group/api/GroupApi';
import ProductCard from './ui/ProductCard';

export default function Group() {
    const {slug} = useParams();
    const [groupProduct, setGroupProduct] = useState<IGroupProduct|undefined>();

    useEffect(() => {
        GroupApi.groupDetails(slug!).then(setGroupProduct);
    }, []);

    return <div className='container'>
        <h1>{slug}</h1>
        {groupProduct
        ?<GroupView groupProduct={groupProduct} />
        :<p>Loading...</p>}
    </div>
}

function GroupView({groupProduct}:{groupProduct:IGroupProduct}) {
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4 g-xl-5">
         {groupProduct.products.map(gp => <ProductCard productBrief={gp} key={gp.id} />)}
    </div>;
}