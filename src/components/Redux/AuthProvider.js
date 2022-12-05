import {useState, createContext} from "react"

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [location, setLocation] = useState("")
    return (
      <AuthContext.Provider value={{location, setLocation}}>{children}</AuthContext.Provider>  
    )
    
}

export default AuthProvider