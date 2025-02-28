import { useContext, useEffect, useState, useMemo } from "react";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";
import { Pet } from "../../Interfaces";
import EachPet from "./EachPet";
export default function AllPets() {
  
    const [allPets, setAllPets] = useState<Pet[]>([])
    const {token_type, access_token} = useContext(apiKeyProvider)
    
    const retrievePets = useMemo(async () => {
       return (await (async function () {
            const res = await fetch("https://api.petfinder.com/v2/animals", {
                headers: {
                    Authorization: `${token_type} ${access_token}`
                }
            });
            return res;
        })()).json();
        
},[access_token, token_type])

    useEffect(() => {
        (async function () {
         const resolved = await Promise.resolve(retrievePets)
         setAllPets(resolved.animals)
        })()
    }, [access_token, retrievePets, token_type])

    
    return (
        <ul>
            {allPets.map((pet) => <li key={pet.id}><EachPet pet={pet}/></li>)}
        </ul>
        
    );
} 