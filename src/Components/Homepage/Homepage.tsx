import { useContext } from "react";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";


export default function Homepage() {

    const accessTokenObj = useContext(apiKeyProvider)

    return (
        <>{JSON.stringify(accessTokenObj)}</>
    )
}