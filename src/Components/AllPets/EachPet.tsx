


import { Pet } from "../../Interfaces";
import { Link, Outlet } from "react-router-dom";
export default function EachPet ({pet}: {pet: Pet}) {
   
    

  
 

    return (
    
    <div className="pet">
        <Link to={`/pets/${pet.id}`}>
        {pet.id}
        <img src={`${pet.primary_photo_cropped.small}`} height="300px" width="300px"/>
        </Link>
        <Outlet/>
    </div>
    )
}