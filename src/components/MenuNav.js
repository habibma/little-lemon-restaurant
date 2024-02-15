import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export const MenuNav = () => {

    const {orderList} = useContext(GlobalContext);

    return (
        <nav className="menu-page--nav">
            <ul>
                <li>
                    <NavLink to={"/menu"} className="nav-link">Menu</NavLink>
                </li>
                <li className="nav-menu--orders">
                    <NavLink to={"/orders"} className="nav-link">Orders</NavLink>
                    <span className="nav-menu--counter">{orderList.length}</span>
                </li>

            </ul>
        </nav>
    )
}
