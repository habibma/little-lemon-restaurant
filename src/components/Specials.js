import React from 'react'
import greeksalad from '../imgs/greek-salad.jpg'
import lemondessert from '../imgs/lemon-dessert.jpg'
import bruchetta from '../imgs/bruchetta.svg'

const specials = [
    {
        image: greeksalad,
        name: 'Greec Salad',
        descryption: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        image: bruchetta,
        name: 'Bruchetta',
        descryption: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        image: lemondessert,
        name: 'Lemon Dessert',
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
                       <h3>{special.name}</h3>
                       <p>{special.descryption}</p>
                       <a href='/'>Order a Delivery</a>
                   </article>
                   )
                   }
            )}
        </>
    )
}