import {NavLink, useNavigate} from "react-router-dom";
import { useContext } from "react";

function Header(){
    const navigate = useNavigate();

    return(
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink  to="Home">
                     Продукты компании
                </NavLink>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav w-100 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Product">
                                <br/>получить все продукты
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Product/pagination">
                               <br/> пагинация по продуктам
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
         </nav> 
    );
}

export default Header;