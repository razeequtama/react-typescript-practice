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