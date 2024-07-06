import { useLocation } from "react-router-dom"
import { MovieListContainer, MovieItem, MovieTitle } from "./MovieList.styled"

const MovieList = ({ trandingMovies }) => {
    const location = useLocation()
    return (
        <MovieListContainer>
            {trandingMovies.map(movie => (
                <MovieItem key={movie.id}>
                    <MovieTitle to={`movies/${movie.id}`} key={movie.id} state={location}>{movie.title}</MovieTitle>
                </MovieItem>
    ))}
        </MovieListContainer>
    );
}

export default MovieList;