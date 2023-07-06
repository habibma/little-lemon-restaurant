import React, { useEffect, useState } from "react"

export const Avatar = () => {

    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch('https://randomuser.me/api/?results=4')
        .then(response => response.json())
        .then(data => setUser(data))
    }

    useEffect(() => {
        fetchData();
    }, []);

    return Object.keys(user).length > 0 ? (
        <div>
            <section style={{display:'inline-flex', alignItems: 'center'}}>
            <img src={user.results[0].picture.thumbnail} alt="profile" className="thumbnail"/>
            <h3>{user.results[0].name.first} {user.results[0].name.last}</h3>
            </section>
            <p>I liked the vibe and music. Cuisines were really crazy and mede me trumatizied</p>
        </div>
    ) : (
        <p>Date Pending...</p>
    )
}