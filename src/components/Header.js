import React from 'react'
import Logo from '../imgs/logo.svg'
import Hamberger from '../imgs/icon-hamburger-menu.svg'
import Basket from '../imgs/basket.svg'

export function Header({children}) {

    return(
        <header>
            <div className='header-row eight'>
                <div className='hamburger'><img src={Hamberger} alt='hamburger menu icon'/></div>
                <a href='/'><img src={Logo} alt='Logo' /></a>
                {children}
                <div className='basket'><img src={Basket} alt='basket icon' /></div>
            </div>
        </header>
    )
}