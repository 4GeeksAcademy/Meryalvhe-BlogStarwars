import React, { useContext } from "react";
import { Spinner } from "../component/Spinner.jsx";
import { Context } from '../store/appContext.js';
import "../../styles/index.css"

export const Characters = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container mt-3 mb-3">
            {!store ? <Spinner /> :
                <div className="row">

                    {store.characters.map((item, id) =>
                        <div key={id} className="col-lg-3 col-md-6 col-sm-10 mb-1">
                            <div  className="card" >
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title indexFont">{item.name}</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}