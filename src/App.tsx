
import './App.css'
import {useEffect,useState } from 'react';

import { Access_Token_Interface } from './Interfaces';
import {routerMap} from "./Routers"
import { apiKeyProvider } from './Contexts/Access_Token_Context';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {


    const apiKey = "Gk08pSE81ZKzShC48ywBTUlBpRtFWdCSjmw9O3sqBQoHh1CTF7";
    const secret = "10o5Mii3nqRUjiRgmGY79uQAJBK9yIyK66Sh540Z"
    const [token, setToken] = useState<Access_Token_Interface>({access_token: "", token_type: "", expires_in: 0});
    const router = createBrowserRouter(routerMap)   
  useEffect(() => {
       (async function(){
         const res = await fetch(`https://api.petfinder.com/v2/oauth2/token`, {
          method: "POST",
          headers: {'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: apiKey,
            client_secret: secret
          })
         })

         return res
       
      })().then((res) => res.json()).then((accessTokenObj) => setToken({
        token_type: accessTokenObj.token_type,
        access_token: accessTokenObj.access_token,
        expires_in: accessTokenObj.expires_in
      }))
  }, [])

      

  return (
    
    <apiKeyProvider.Provider value={token}>
      <RouterProvider router={router}/>
    </apiKeyProvider.Provider>
   
    
  )
}

export default App
