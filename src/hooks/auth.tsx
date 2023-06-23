
import React,{createContext, useState, useContext,ReactNode} from 'react';

interface IAuthContext{
    logged: boolean;
    signIn(email:string, password:string):void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext );

const AuthProvider:  React.FC<{ children?: ReactNode }> = ({ children })  => {

    const [logged, setLogged]=useState<boolean>(()=>{
            const isLogged=localStorage.getItem('@meu-form:logged');
            return !! isLogged;
    });

    const signIn=(email:string, password:string) => {
        if(email=== 'xand.m.leite@gmail.com'&&password==='123'){
            localStorage.setItem('@meu-form:logged','true');
            setLogged(true);
        }else{
            alert('Senha ou usuario inválido!');
        }
    }


const signOut=()=>{
    localStorage.removeItem('@meu-form:logged');
    setLogged(false);
} 

return(
<AuthContext.Provider value={{logged, signIn, signOut}}>
    {children}
</AuthContext.Provider>

);

}

function useAuth(): IAuthContext{
        const context = useContext(AuthContext);
        return context;

}


export {AuthProvider, useAuth}