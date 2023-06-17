import React from "react"
import { Link } from "react-router-dom"


export function Nav() {

    return(
        <nav>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservation" className="nav-item">Reservation</Link>
            <Link to="/order" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
        </nav>
    )
}