import React from "react"
import profile1 from "../imgs/Default_pfp.svg"

export const Avatar = () => {
    return (
        <div>
            <section style={{display:'inline-flex', alignItems: 'center'}}>
            <img src={profile1} alt="profile" className="thumbnail"/>
            <p>Jone Doe</p>
            </section>
            <p>I liked the vibe and music. Cuisines were really crazy and mede me trumatizied</p>
        </div>
    )
}