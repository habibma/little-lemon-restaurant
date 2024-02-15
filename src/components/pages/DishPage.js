import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context"

import { MenuNav } from '../../components/MenuNav'
import { Main } from "../Main"

const DishPage = () => {

    const { id } = useParams('5ed6604591c37cdc054bc886')

    const { dishDatails, setDishDeatails, handleOrderList, orderList } = useContext(GlobalContext)

    const controller = new AbortController();

    const fetchedData = async () => {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            if (data?.data) {
                setDishDeatails({ ...data.data })
                // console.log(data.data)
            }
            // console.log(dishDatails)
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchedData()
        return () => controller.abort();
    }, [id])

    return (
        <Main>
            <div className='container'>
                <section className="eight">
                    <h1>Details</h1>
                </section>
            </div>
            <MenuNav />
            <div className="container dish-page">
                <section className="dish-page--cover">
                    {dishDatails && <img src={dishDatails.recipe.image_url} alt={dishDatails.recipe.title} />}
                </section>
                <section>
                    {dishDatails && <h1>{dishDatails.recipe.title}</h1>}
                    {dishDatails && <h3>{dishDatails.recipe.publisher}</h3>}
                    <button onClick={() => handleOrderList(dishDatails.recipe)}>
                        {orderList.some(itme => itme.id === dishDatails.recipe.id) ? 'Remove from orders' : 'Save as orders'}
                    </button>
                    <h3>Ingredients:</h3>
                    <ul>
                        {dishDatails && dishDatails.recipe.ingredients.map((ingredient, index) =>
                            <li key={index}>
                                - <span>{ingredient.quantity}</span> <span>{ingredient.unit}</span>
                                <span>{ingredient.description}</span>
                            </li>)}
                    </ul>
                </section>
                <section className="dish-description">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget efficitur dolor. In mollis enim id nulla euismod mattis. Cras pellentesque eleifend mauris ac rutrum. Nulla facilisi. Nulla imperdiet nulla vitae tellus lobortis malesuada. Maecenas ut dui quis ante elementum ornare ullamcorper vel neque. Vestibulum ac lectus risus. Aenean porttitor, purus sit amet ullamcorper aliquet, mauris eros porttitor urna, ac imperdiet ex lorem et ipsum. Aenean in blandit neque. Vestibulum sagittis nulla in sodales egestas.</p>
                </section>
            </div>
        </Main>
    )
}

export default DishPage;