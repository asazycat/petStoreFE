

import { useEffect, useState } from "react";
import { Pet } from "../../Interfaces";
import { Link, Outlet } from "react-router-dom";
export default function EachPet ({pet}: {pet: Pet}) {
    const [img,setImg] = useState({small: '', medium: '', large: '', full:''})
    

    useEffect(() => {
        setImg(pet.primary_photo_cropped)
    }, [img, pet.primary_photo_cropped])
  
 
    console.log(img)
    return (
    
    <div className="pet">
        <Link to={`/pets/${pet.id}`}>
        {pet.id}
        <img src={`${img.small}`} height="300px" width="300px"/>
        </Link>
        <Outlet/>
    </div>
    )
}