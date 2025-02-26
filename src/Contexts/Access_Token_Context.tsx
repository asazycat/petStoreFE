import { createContext } from "react";
import { Access_Token_Interface } from "../Access_Token_Interface";

export const apiKeyProvider = createContext<Access_Token_Interface>({access_token: "", token_type: "", expires_in: 0});