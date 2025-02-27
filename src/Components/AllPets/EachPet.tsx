import { Pet } from "../../Interfaces"
export default function EachPet ({id,pet}: {id: number, pet: Pet}) {
    return (
        <li>{id}: {pet.name}</li>
    )
}