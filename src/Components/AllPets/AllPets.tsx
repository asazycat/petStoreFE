import { useContext, useEffect, useState } from "react";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";
import { Pet } from "../../Interfaces";
import EachPet from "./EachPet";


export default function AllPets() {

    const [allPets, setAllPets] = useState<Pet[]>([])
    const {token_type, access_token} = useContext(apiKeyProvider)
    useEffect(() => {
        (async function() {
            const res= await fetch("https://api.petfinder.com/v2/animals", {headers: {
                Authorization: `${token_type} ${access_token}`
            }})
            return res
        })().then((res) => res.json()).then((res) => setAllPets(res.animals))
    }, [access_token, token_type])
    
    return (
        <ul>
            {allPets.map((pet) => <EachPet id={pet.id} pet={pet}/>)}
        </ul>
        
    );
} 