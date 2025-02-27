import { createContext } from "react";
import { Access_Token_Interface } from "../Interfaces";

export const apiKeyProvider = createContext<Access_Token_Interface>({access_token: "", token_type: "", expires_in: 0});