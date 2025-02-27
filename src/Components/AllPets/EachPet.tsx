import { Pet } from "../../Interfaces"
export default function EachPet ({pet}: {pet: Pet}) {
    return (
        <>{pet.id}: {pet.name}</>
    )
}