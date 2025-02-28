import { Pet } from "../../Interfaces";
import { Link, Outlet } from "react-router-dom";
export default function EachPet ({pet}: {pet: Pet}) {
    return (
    <>
        <Link to={`/pets/${pet.id}`}>{pet.id}: {pet.name}</Link>
        <Outlet/>
    </>
    )
}