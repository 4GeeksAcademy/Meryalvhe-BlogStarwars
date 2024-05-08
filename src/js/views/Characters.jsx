import React, { useState } from "react";

export const Characters = () => {

    const [characters, setCharacters] = useState();

    const getCharacters = async () => {
        const uri = ''
        const options = {};

        const response = await fetch(uri, options)
        if (!response.ok) {
            console.log('Error:', response.status);
            return
        }
        const data = await response.json()
        console.log(data)
        setCharacters(data)
    }

    return (
        <div className = "container">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>
        </div>
    )
}