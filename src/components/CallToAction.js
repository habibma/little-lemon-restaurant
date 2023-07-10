import React from "react"
import { Link } from "react-router-dom"

export function CallToAction(props) {
    return (
        <Link to={props.href}><button>{props.children}</button></Link>
    )
}