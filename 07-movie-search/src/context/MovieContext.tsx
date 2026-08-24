import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { OMDbResponse } from "../types/omdb";

type MovieContextType = {
    movie: OMDbResponse | null,
    setMovie: Dispatch<SetStateAction<OMDbResponse | null>>
}

export const MovieContext = createContext<MovieContextType | null>(null);

export function useMovieContext()
{
    const context = useContext(MovieContext);
    if(!context) throw new Error ("MovieContext is null! Use the component inside a MovieContext provider!");
    return context;
}

export function MovieContextProvider({children}: {children: ReactNode}){

    const [movie, setMovie] = useState<OMDbResponse | null>(null);

    return(
        <MovieContext.Provider value={{movie, setMovie}}>
            {children}
        </MovieContext.Provider>
    )
}