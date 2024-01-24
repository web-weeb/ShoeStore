import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
const [token, setToken] = useState(localStorage.getItem("token"));

// store token

const storetokenInLS = (servertoken) =>{
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
}

// when token is true

let isUserLoggedIn = !!token;
console.log("isUserLoggedIn", isUserLoggedIn);

// logout user

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


    return (
      <AuthContext.Provider value={{ storetokenInLS, LogoutUser, isUserLoggedIn }}>
        {children}
      </AuthContext.Provider>
    );
};

// custom hook

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authContextValue;
};



