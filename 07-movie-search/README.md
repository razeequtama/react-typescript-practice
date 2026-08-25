# 7. Movie Search

Now introduce APIs.

Search for movies.

```
[ Spider-Man____________ ] [Search]

Results:

Movie
```

You need to handle:

```
idle
loading
success
error
```

Type the API response.

```tsx
type Movie = {
    id: number;
    title: string;
    releaseDate: string;
};
```

### React

Learn:

```tsx
useEffect()
```

and asynchronous logic.

### TypeScript

Learn:

- API response types
- nullable values
- optional properties
- type narrowing

# Versions
## Version 1
src/components/MovieResult.tsx
```tsx
import { useMovieContext } from "../context/MovieContext";
import { useMovieResultContext } from "../context/MovieResultContext";

export default function MovieResult() {
    const { movie } = useMovieContext();
    const {movieResult} = useMovieResultContext();

    if (!movie || movie.Response === "False") {
        return(
            <div>
                <h1>Search for a movie...</h1>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <h1>{movie.Title}</h1>

                <img
                    src={movie.Poster}
                    alt={`${movie.Title} poster`}
                />

                <p>
                    <strong>Release Date:</strong> {movie.Released}
                </p>

                <p>
                    <strong>Synopsis:</strong> {movie.Plot}
                </p>
            </div>
        );
    }

}
```
src/components/MovieSearch.tsx
```tsx
import { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { getMovie } from "../services/omdb";
import { useMovieResultContext } from "../context/MovieResultContext";

export default function MovieSearch() {

    const { movie, setMovie } = useMovieContext();
    const { movieResult, setMovieResult } = useMovieResultContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        console.log(movie)
        console.log(movieResult)

    }, [movie])

    async function retreiveMovie(event: React.FormEvent<HTMLFormElement>)
    {

        event.preventDefault();
        const form = document.querySelector<HTMLFormElement>('form');
        const search = form?.querySelector<HTMLInputElement>('input');
        const submitBtn = form?.querySelector<HTMLButtonElement>('button');
        const searchValue = search?.value || null;

        setLoading(true);

        if(!searchValue)
        {
            console.error("No input!");
            
        }
        else
        {
            const result = await getMovie(searchValue);
            if (result.Response === "True") {
                setMovie(result);
                setMovieResult(true);
            } else {
                setMovie(result);
                setMovieResult(false);
            }
            setLoading(false);
        }


    }

    return (
        <div>
            <form onSubmit={retreiveMovie}>
                <label htmlFor="search">Search: </label>
                <input type="search" name="search" />
                <button type="submit" disabled={loading}>Search</button>
            </form>
        </div>
    );
}
```
src/context/MovieContext.tsx
```tsx
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
```
src/context/MovieResultContext.tsx
```tsx
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
```
src/services/omdb.ts
```tsx
import axios from "axios";
import type { OMDbResponse } from "../types/omdb";

export async function getMovie(title: string): Promise<OMDbResponse> {

    const API_KEY = import.meta.env.VITE_API_KEY;

    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
        return response.data;
    } catch (error) {
        console.error("Failed to fetch movie:", error);
        throw error;
    }

}
```
src/types/omdb.ts
```tsx
export type OMDbRating = {
  Source: string;
  Value: string;
};

export type OMDbMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: OMDbRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True";
};

export type OMDbError = {
  Response: "False";
  Error: string;
};

export type OMDbResponse = OMDbMovie | OMDbError;
```

# What I Learned
- Using .env in a normal Express App is different than in a React + Vite app. 

# Result
![alt text](docs/docs_gif.gif)