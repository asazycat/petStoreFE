import { useContext, useEffect, useState, useMemo, useCallback} from "react";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";
import { Pet } from "../../Interfaces";
import EachPet from "./EachPet";
import "./pets.css"
export default function AllPets() {
    const [page, setPage] = useState(1)
    const [allPets, setAllPets] = useState<Pet[]>([]);
    const {token_type, access_token} = useContext(apiKeyProvider);
     function imageShow(img:string) {
        console.log(img)
    }
    const pageNumbersNext = useCallback(()=> {
        setPage(page + 1)
     
    }, [page]);
    const retrievePets = useMemo(async () => {
       
    return await fetch(`https://api.petfinder.com/v2/animals?page=${page}&limit=10`, {
                headers: {
                    Authorization: `${token_type} ${access_token}`
                }
            }).then((res) => res.json())
           
        }
    ,[access_token, page, token_type])


    useEffect(() => {
            (async function () {
         const resolved = await Promise.resolve(retrievePets)
                const {animals} = resolved
                // console.log(resolved)
         setAllPets(animals)
        })()
    }, [access_token, retrievePets, token_type])


    return (
        <>
      
            <ul className="pets">
                {allPets.map((pet) => {if(pet.primary_photo_cropped) {
                    imageShow(pet.primary_photo_cropped["small"])
                    return (
                        <li key={pet.id} className="pet"><EachPet id={pet.id} name={pet.name} img={pet.primary_photo_cropped["small"]} />
                            
                        </li>)
                }
                    })}
            </ul>
                <button onClick={() => pageNumbersNext()}>Click for Next page</button>
      
        </>
    );
} 


