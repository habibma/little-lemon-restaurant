import React from 'react'
import logo from '../Logo.svg'
import hamberger from '../imgs/🦆 icon _hamburger-menu.svg'
import basket from '../imgs/Basket.svg'

export function Header({children}) {

    return(
        <header>
            <div className='header-row eight'>
                <div className='hamburger'><img src={hamberger} alt=''/></div>
                <a href='/'><img src={logo} alt='Logo' /></a>
                {children}
                <div className='basket'><img src={basket} alt='' /></div>
            </div>
        </header>
    )
}