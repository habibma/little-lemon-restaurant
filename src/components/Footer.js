import React from 'react'
import Logo from '../imgs/logo.svg'

export function Footer(props) {

    return(
        <footer>
            <div className='footer-row eight'>
                <section><img src={Logo} alt="logo"/></section>
                <section>
                    <h4>Doormat Navigation</h4>
                    {props.children}
                </section>
                <section>
                <h4>Contact</h4>
                <ul>
                    <li key='address'>Address</li>
                    <li key='phone-nauber'>Phone Number</li>
                    <li key='email'>Email</li>
                </ul>
                </section>
                <section>
                <h4>Social Media</h4>
                <ul>
                    <li key='facbook'>Facebook</li>
                    <li key='instagram'>Instagram</li>
                    <li key='twitter'>Twitter</li>
                </ul>
                </section>
            </div>
        </footer>
    )
}