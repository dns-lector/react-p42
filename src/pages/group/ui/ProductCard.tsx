import { Link } from "react-router-dom";
import type IProductBrief from "../../../entities/group/model/IProductBrief";

export default function ProductCard({productBrief}:{productBrief:IProductBrief}) {
    return <div className="col" >
    <div className="card h-100">
        <Link to={`/group/${productBrief.slug}`} className="nav-link" >
            <img src={productBrief.imageUrl} className="card-img-top" alt={productBrief.name}/>
        </Link>
        <div className="card-body">
            <h5 className="card-title">{productBrief.name}</h5>
            <p className="card-text">{productBrief.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
            <div>Card</div> 
            <button className="btn btn-outline-success">
                <i className="bi bi-cart"></i>
            </button>
        </div>
    </div>
</div>
}