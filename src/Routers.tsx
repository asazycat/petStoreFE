
import AllPets from "./Components/AllPets/AllPets";
import Homepage from "./Components/Homepage/Homepage";
import Layout from "./Components/Layout";
import Organizations from "./Components/Organizations/Organizations";
import PetPage from "./Components/PetPage/PetPage";

export const routerMap = [
    
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: 'pets',
                element: (
                    <AllPets />
                ),
          
            },
            {
                path: 'pets/:id',
                element: <PetPage/>
            },
            {
                path: '/organizations',
                element: <Organizations/>
            }
        ]
    }
]