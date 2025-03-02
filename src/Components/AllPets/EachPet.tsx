

import "./pets.css"
import { Pet } from "../../Interfaces";
import { Link } from "react-router-dom";
export default function EachPet ({pet}: {pet: Pet}) {
   
    

  
 

    return (
    

        <Link to={`/pets/${pet.id}`}>
        {pet.id}
        <img src={`${pet.primary_photo_cropped.small}`} height="300px" width="300px"/>
        </Link>
    
 
    )
}