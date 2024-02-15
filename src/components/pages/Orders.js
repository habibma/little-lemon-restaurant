import { useContext } from "react";
import { Link } from "react-router-dom";
import { Main } from "../Main";
import { GlobalContext } from "../../context";

import { MenuNav } from "../MenuNav";

const MenuPage = () => {

    const { orderList, handleOrderList } = useContext(GlobalContext)

    console.log(orderList)

    return (
        <Main>
            <div className='container'>
                <section className="eight">
                    <h1>Orders</h1>
                </section>
            </div>
            <MenuNav />
            <div>
                <section className="menu-page--list eight">
                    {orderList.length > 0 ?
                        orderList.map(order => {
                            return (
                                <div key={order.id} className="order-page--block">
                                    <div className="menu-page--image-frame">
                                        <img className="menu-page--image" src={order.image_url} alt={order.title} />
                                        <span
                                            className="close-sign"
                                            onClick={() => handleOrderList(order)}
                                        >
                                            &#10005;
                                        </span>
                                    </div>
                                    <h2 className="menu-page--block-title">{order.title}</h2>
                                    <Link to={`/dish-item/${order.id}`}><button>See the details</button></Link>
                                </div>
                            )
                        }) :
                        <p>Nothing is added in the order list!</p>
                    }
                </section>
            </div>
        </Main>
    )
}

export default MenuPage;