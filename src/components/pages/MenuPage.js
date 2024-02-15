import { Link } from "react-router-dom";
import { Main } from "../Main";
import { useContext, useEffect } from "react";
import { GlobalContext } from '../../context';
import { MenuNav } from "../MenuNav";

import '../../assets/css/menu.css'

const MenuPage = () => {

    const { cuisines, setCuisines } = useContext(GlobalContext)

    const controller = new AbortController();

    const fetchDate = async () => {
        try {
            const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            if (data?.data?.recipes) {
                const recipes = data.data.recipes;
                setCuisines(() => {
                    const newArray = []
                    recipes.map(recipe =>
                        newArray.push({ id: recipe.id, title: recipe.title, src: recipe.image_url })
                    )
                    return newArray;
                })
            }
        } catch (error) {
            console.error('Error', error);
        }

    }

    useEffect(() => {
        fetchDate()
        return () => controller.abort();
    }, [])

    return (
        <Main>
            <div className='container'>
                <section className="eight">
                    <h1>Our Menu</h1>
                </section>
            </div>
            <div>
                <section className="eight">
                    <MenuNav />
                </section>
            </div>
            <div className="menu-page--list">
                {cuisines && cuisines.length > 0 ?
                    cuisines.map(cuisine => {
                        return (
                            <div key={cuisine.id} className="menu-page--block">
                                <div className="menu-page--image-frame">
                                    <img className="menu-page--image" src={cuisine.src} alt={cuisine.title} />
                                </div>
                                <h2 className="menu-page--block-title">{cuisine.title}</h2>
                                <Link to={`/dish-item/${cuisine.id}`}><button>See the details</button></Link>
                            </div>
                        )
                    }) :
                    <div>Loading...</div>}
            </div>
        </Main>
    )
}

export default MenuPage;