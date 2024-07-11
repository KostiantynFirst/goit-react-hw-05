import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movie-api";
import { MovieContainer, MovieHeading } from "./HomePage.styled";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {

    const [trandingMovies, setTrandingMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(false);
            const  res = await getTrendingMovies();
            const movies = res.data.results;
            if (movies) {
                setTrandingMovies(movies);
                }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }

    };
        fetchData();
    }, [])

    return (
        <MovieContainer>
            <MovieHeading>Trending today</MovieHeading>
            {loading && <Loader />}
            {error && <ErrorMessage />}
            <MovieList trandingMovies={trandingMovies} />
        </MovieContainer>
    );
};

export default HomePage;