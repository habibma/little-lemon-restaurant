import React from 'react'
import greeksalad from '../imgs/greek-salad.jpg'
import lemondessert from '../imgs/lemon-dessert.jpg'
import bruchetta from '../imgs/bruchetta.svg'

const specials = [
    {
        image: greeksalad,
        name: 'Greek Salad',
        price: '5$',
        descryption: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        image: bruchetta,
        name: 'Bruchetta',
        price: '6$',
        descryption: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        image: lemondessert,
        name: 'Lemon Dessert',
        price: '6.5$',
        descryption: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
]


export function Specials() {
    return (
        <>
            {specials.map((special, index) => {
                   return (
                   <article key={index}>
                       <img src={special.image} alt={special.name}/>
                       <div className='block-content'>
                            <div className='flex-container space-btween'><h3>{special.name}</h3><p className='align-item-center'>{special.price}</p></div>
                            <p>{special.descryption}</p>
                            <div><a href='/'>Order a Delivery</a></div>
                       </div>
                   </article>
                   )
                   }
            )}
        </>
    )
}