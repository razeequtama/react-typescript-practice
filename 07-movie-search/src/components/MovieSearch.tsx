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