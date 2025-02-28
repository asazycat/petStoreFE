
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";
export default function PetPage() {

    const {id} = useParams();
    const {token_type, access_token} = useContext(apiKeyProvider)
    const [pet, setPet] = useState({})
    useEffect(() => {
       if(access_token != "") {(async function() {
            const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {headers: {
                    Authorization: `${token_type} ${access_token}`
                }})
            return res
        })().then((res) => res.json()).then((res) =>setPet(res.animal))
    }},[access_token, id, token_type])

    return (
        <>
        <h1>{JSON.stringify(pet)}</h1>
        </>
    )
}