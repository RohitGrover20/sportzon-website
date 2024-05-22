"use client";
// import config from "@/config";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

function Context({ children }) {
  const [verify, setVerify] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configModule = await import("@/config");
        const config = configModule.default; // Accessing the default export from the module
        const options = {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        };
        const response = await fetch(`${config.API_URL}/auth/verify-session`, options);
        const data = await response.json();
        setVerify(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return <UserContext.Provider value={verify}>{children}</UserContext.Provider>;
}

export default Context;
