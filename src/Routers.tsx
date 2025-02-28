
import AllPets from "./Components/AllPets/AllPets";
import Homepage from "./Components/Homepage/Homepage";
import PetPage from "./Components/PetPage/PetPage";

export const routerMap = [
    
    {
        path: '/pets',
        element: <AllPets/>,
    
            
        
    },
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path:'/pets/:id',
        element: <PetPage/>
    }
]