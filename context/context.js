"use client"
import config from "@/config";
import { createContext, useEffect, useMemo, useState } from "react";
export const UserContext = createContext(null);
function Context({ children }) {
    const [verify, setVerify] = useState(null)
    const options = {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    };
    useEffect(() => {
        fetch(`${config.API_URL}/auth/verify-session`, options).then((result) => {
            result.json().then((verify) => {
                setVerify(verify)
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <UserContext.Provider value={verify}>
            {children}
        </UserContext.Provider>
    );
}


export default Context