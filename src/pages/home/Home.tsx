import './ui/Home.css';
import { useContext, useEffect, useState } from "react";
import type IGroup from "../../entities/group/model/IGroup";
import GroupApi from "../../entities/group/api/GroupApi";
import { Link } from "react-router-dom";
import AppContext from "../../features/_context/AppContext";
import type IPagination from "../../entities/_api_base/model/IPagination";

const preload_grp:Array<IGroup> = Array.from({length: 3}, (_, i) => {
    return {
        id: i+1+"",
        name: "Loading...",
        description: "Loading...",
        slug: "",
        imageUrl: "/img/blank.png"
    }
});

export default function Home() {
    const [groups, setGroups] = useState<Array<IGroup>>(preload_grp);
    const {setLoading, locale} = useContext(AppContext);
    const [pagination, setPagination] = useState<IPagination|undefined>();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        GroupApi.allGroups(currentPage)
        .then(grp => {
            setGroups(grp.data);
            setPagination(grp.meta.pagination);
        })
        .finally(() => {setLoading(false);});
    }, [currentPage]);

    const prevClick = () => setCurrentPage(currentPage - 1);
    const nextClick = () => setCurrentPage(currentPage + 1);
    const gotoClick = (p:number) => setCurrentPage(p);


    return <div className="container">
        <h1>{locale.homePageTitle}</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4 g-xl-5">
            {groups.map(g => <div className="col" key={g.id}>
                <div className="card h-100">                    
                    <div className="card-img-top w-100 d-flex justify-content-between gap-1">
                        <Link to={`/group/${g.slug}`} className="nav-link w-0 flex-grow-1" >
                            <img className="w-100" src={g.imageUrl} alt={g.name}/>
                        </Link>
                        {g.children?.map(c => <Link to={`/group/${c.slug}`} className="nav-link w-0 flex-grow-1" >
                            <img className="w-100" src={c.imageUrl} alt={c.name} key={c.name}/>
                        </Link>)
                        }                        
                    </div>                    
                    <div className="card-body">
                        <h5 className="card-title">{g.name}</h5>
                        <p className="card-text">{g.description}</p>
                    </div>
                </div>
            </div>)}
        </div>
        {pagination &&
            <nav className="my-4" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" 
                        onClick={currentPage > 1 ? prevClick : undefined} 
                        role={currentPage > 1 ? "button" : undefined}
                        aria-label="Previous" >
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {Array.from({length: pagination.totalPages}, (_, i) => 
                        <li className={"page-item" + (i+1 == currentPage ? " active" : "")}
                        role={i+1 != currentPage ? "button" : undefined}>
                            <a className="page-link" 
                            onClick={i+1 != currentPage ? () => gotoClick(i+1) : undefined} 
                            >{i+1}</a>
                        </li>
                    )}
                    <li className={"page-item" + (currentPage == pagination.totalPages ? " disabled" : "")}>
                        <a className="page-link" 
                        onClick={currentPage < pagination.totalPages ? nextClick : undefined} 
                        role={currentPage < pagination.totalPages ? "button" : undefined}
                        aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        }
    </div>;
}