import React from 'react'
import logo from '../imgs/logo.svg'
import hamberger from '../imgs/icon-hamburger-menu.svg'
import basket from '../imgs/basket.svg'

export function Header({children}) {

    return(
        <header>
            <div className='header-row eight'>
                <div className='hamburger'><img src={hamberger} alt='hamburger menu icon'/></div>
                <a href='/'><img src={logo} alt='Logo' /></a>
                {children}
                <div className='basket'><img src={basket} alt='basket icon' /></div>
            </div>
        </header>
    )
}