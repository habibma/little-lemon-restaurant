import restaurantfood from '../imgs/restaurantfood.jpg'
import greeksalad from '../imgs/greek-salad.jpg'
import lemondessert from '../imgs/lemon-dessert.jpg'
import bruchetta from '../imgs/bruchetta.svg'
import about1 from '../imgs/mario-and-adrian-a.jpg'
import about2 from '../imgs/restaurant-chef B.jpg'

export function Main() {

    return(
        <main>
            <div className='container'>
                <section className='slider slider-row eight'>
                    <article>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a Table</button>
                    </article>
                    <img src={ restaurantfood } alt="restaurant food" />
                </section>
            </div>
            <div className='container'>
                <section className='sideber-2 eight'>
                    <h2>This Week Specials!</h2>
                    <button>Online Menu</button>
                </section>
                <section className='promption eight'>
                    <article>
                        <img src={greeksalad} />
                        <h3>Greek Salad</h3>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <a href='#'>Order a Delivery</a>
                    </article>
                    <article>
                        <img src={bruchetta} />
                        <h3>Bruchetta</h3>

                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <a href='#'>Order a Delivery</a>
                    </article>
                    <article>
                        <img src={lemondessert} />
                        <h3>Lemon Dessert</h3>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a href='#'>Order a Delivery</a>
                    </article>
                </section>
            </div>
            <div className='container'>
                <section className='testimonial eight'>
                    Testimonials
                </section>
            </div>
            <div className='container'>
                <section className='about eight'>
                    <article>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </article>
                    <div>
                        <div className='image'><img src={about1} alt='Little Lemon&#39;s chef' /></div>
                        <div className='image'><img src={about2} alt='Little Lemon&#39;s chef' /></div>
                    </div>
                </section>
            </div>
        </main>
    )
}