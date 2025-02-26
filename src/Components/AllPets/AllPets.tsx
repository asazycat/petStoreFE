import { useContext, useEffect } from "react";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";



export default function AllPets() {

    const {token_type, access_token} = useContext(apiKeyProvider)
    useEffect(() => {
        (async function() {
            const res= await fetch("https://api.petfinder.com/v2/animals", {headers: {
                Authorization: `${token_type} ${access_token}`
            }})
            return res
        })().then((res) => res.json()).then((res) => console.log(res))
    }, [access_token, token_type])

    return (
        <></>
    );
} 