import { useContext, useEffect, useState, useMemo } from "react";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";
import { Pet } from "../../Interfaces";
import EachPet from "./EachPet";
import { useRenderCount } from "@uidotdev/usehooks";

export default function AllPets() {
   
    const [allPets, setAllPets] = useState<Pet[]>([])
    const {token_type, access_token} = useContext(apiKeyProvider)
    const renderCount = useRenderCount();
    const retrievePets = useMemo(async () => {
            const res_1 = await (async function () {
            const res = await fetch("https://api.petfinder.com/v2/animals", {
                headers: {
                    Authorization: `${token_type} ${access_token}`
                }
            });
            return res;
        })();
        const res_2 = await res_1.json();
        return res_2.animals;
       
    },[access_token, token_type])

    useEffect(() => {
        (async function () {
         const resolved = await Promise.resolve(retrievePets)
         setAllPets(resolved)
        })()
    }, [access_token, retrievePets, token_type])
  
    console.log(renderCount)
    return (
        <ul>
            {allPets.map((pet) => <li key={pet.id}><EachPet pet={pet}/></li>)}
        </ul>
        
    );
} 