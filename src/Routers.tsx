
import AllPets from "./Components/AllPets/AllPets";
import Homepage from "./Components/Homepage/Homepage";

export const routerMap = [
    
    {
        path: '/pets',
        element: <AllPets/>
    },
    {
        path: '/',
        element: <Homepage/>
    }
]