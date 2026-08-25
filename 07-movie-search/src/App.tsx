import MovieSearch from "./components/MovieSearch"
import { MovieContextProvider } from "./context/MovieContext"
import { MovieResultContextProvider } from "./context/MovieResultContext"
import MovieResult from "./components/MovieResult"

export default function App()
{
  return(
    <div>
      <MovieResultContextProvider>
      <MovieContextProvider>
        <MovieSearch/>
        <MovieResult/>
      </MovieContextProvider>
      </MovieResultContextProvider>
    </div>
  )
}