import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movie-api";
import { MovieContainer, MovieHeading } from "./HomePage.styled";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {

    const [trandingMovies, setTrandingMovies] = useState([]);

    useEffect(() => {

    const fetchData = async () => {
        try {
            const  res = await getTrendingMovies();
            const movies = res.data.results;
            if (movies) {
                setTrandingMovies(movies);
                }
        } catch (error) {
            console.error("Error receiving data:", error);
        } 

    };
        fetchData();
    }, [])

    return (
        <MovieContainer>
            <MovieHeading>Trending today</MovieHeading>
            <MovieList trandingMovies={trandingMovies} />
        </MovieContainer>
    );
};

export default HomePage;