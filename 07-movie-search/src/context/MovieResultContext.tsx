import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type MovieResultContextType = {
    movieResult: boolean,
    setMovieResult: Dispatch<SetStateAction<boolean>>
}

export const MovieResultContext = createContext<MovieResultContextType | null>(null);

export function useMovieResultContext()
{
    const context = useContext(MovieResultContext);
    if(!context) throw new Error ("MovieResultContext is null! Use the component inside a MovieResultContext provider!");
    return context;
}

export function MovieResultContextProvider({children}: {children: ReactNode})
{

    const [movieResult, setMovieResult] = useState<boolean>(false);

    return(
        <MovieResultContext.Provider value={{movieResult, setMovieResult}}>
            {children}
        </MovieResultContext.Provider>
    )
}