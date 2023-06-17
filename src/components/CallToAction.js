import React from "react"

export function CallToAction(props) {
    return (
        <button onClick={props.href}>{props.children}</button>
    )
}