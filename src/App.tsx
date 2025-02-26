
import './App.css'
import {useEffect } from 'react';
import { useState } from 'react';
import Homepage from './Components/Homepage/Homepage';
import { Access_Token_Interface } from './Access_Token_Interface';

// eslint-disable-next-line react-refresh/only-export-components
import { apiKeyProvider } from './Contexts/Access_Token_Context';

function App() {


    const apiKey = "Gk08pSE81ZKzShC48ywBTUlBpRtFWdCSjmw9O3sqBQoHh1CTF7";
    const secret = "10o5Mii3nqRUjiRgmGY79uQAJBK9yIyK66Sh540Z"
    const [token, setToken] = useState<Access_Token_Interface>({access_token: "", token_type: "", expires_in: 0});
     
  useEffect(() => {
      const grantAPIKey = async() => {
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
       
      }

      grantAPIKey().then((res) => res.json()).then((accessTokenObj) => setToken({
        token_type: accessTokenObj.token_type,
        access_token: accessTokenObj.access_token,
        expires_in: accessTokenObj.expires_in
      }))
  }, [])

      

  return (
    <apiKeyProvider.Provider value={token}>
      <Homepage/>
    </apiKeyProvider.Provider>
    
  )
}

export default App
