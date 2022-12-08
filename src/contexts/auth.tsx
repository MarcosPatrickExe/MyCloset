import React, { useEffect } from "react";

type AuthContextData = {
    signed: boolean;
    setSigned: (signed: boolean) => void;
    userInfo: any;
    setUserInfo: (userInfo: any) => void;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

export const AuthContext = React.createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [signed, setSigned] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState(null);

    useEffect(() => {
        if(userInfo) {
            setSigned(true);
            console.log(userInfo);
            
        }
    }, [signed, userInfo]);

    return (
        <AuthContext.Provider value={{signed, userInfo, setSigned, setUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(AuthContext);
    return context;
}