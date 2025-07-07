


import "./pets.css"
import { Link } from "react-router-dom";

export default function EachPet ({id, name, img}: {id: string, name: string, img: string}) {
   
    return (
        <>
        <Link to={`/pets/${id}`}>
        <p>{name}</p>
        <img src={`${img}`} alt={img}/>
        </Link>
        </>
    )
}