
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKeyProvider } from "../../Contexts/Access_Token_Context";
import { Pet } from "../../Interfaces";

export default function PetPage() {
    const {id} = useParams();
    const {token_type, access_token} = useContext(apiKeyProvider)
    const [pet, setPet] = useState<Pet>({
    id: '0',
    organization_id:'',
    url:'',
    type:'',
    species:'',
    breeds: ['','', false,false],
    colors: {primary: '', secondary: '', tertiary: ''},
    age: '',
    gender:'',
    size:'',
    coat:'',
    attributes:{spayed_neutered: false, house_trained:false, declawed: false, special_needs: false, short_current: true},
    environment:{children: false, dogs: false, cats: false},
    tags:[],
    name:'',
    description:'',
    organization_animal_id:'',
    photos:[{small: "", medium: "", large: "", full: ""}],
    primary_photo_cropped:{small: "", medium: "", large: "", full: ""},
    videos:'',
    status: '',
    status_changed_at: '',
    published_at:'',
    distance: 0,
    contact: {email:'', phone: '', address: {address1:'', address2: '', city:'', state: '', email:'', phone: ''}},
    _links: {self: {href:''}, type: {href:''}, organization: {href:''}
    }})
    useEffect(() => {
   (async function() {
            const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {headers: {
                    Authorization: `${token_type} ${access_token}`
                }})
            return res
        })().then((res) => res.json()).then((res) =>setPet(res.animal))
    },[access_token, id, token_type])
 
    return (
        <>
        <h1>{pet.name}</h1>
        <img src={`${pet.primary_photo_cropped['small']}`}/>
        </>
    )
}