import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useState } from "react"

export interface User {
    login: string;
    avatar_url: string;
    name: string;
}

interface GitHubContextProps {
    user: User | null;
    fetchUser: (user: User) => void
}

export const GitHubContext = createContext({} as GitHubContextProps);

interface GitHubContextProviderProps {
    children: ReactNode;
}

export const GitHubContextProvider = ({ children }: GitHubContextProviderProps) => {
    const [ user, setUser ] = useState<User | null>(null);

    const fetchUser = useCallback((user: User) => {
        // const { data } = await axios.get<User>(`https://api.github.com/users/${userName}`)

        setUser(user)
    }, [])

    return (
        <GitHubContext.Provider value={{ user, fetchUser }}>
          {children}
        </GitHubContext.Provider>
    )
}

export const useGitHubContext = () => {
    const ctx = useContext(GitHubContext);

    return ctx;
}
