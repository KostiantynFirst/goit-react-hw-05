import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movie-api";
import { MovieList, MovieItem, MovieContainer, MovieTitle, MovieHeading} from "./HomePage.styled";

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
            <MovieList>
                {trandingMovies.map(({id, title}) => (
                    <MovieItem key={id}>
                        <MovieTitle to={`movies/${id}`} key={id}>{title}</MovieTitle>
                    </MovieItem>
                ))} 
            </MovieList>
        </MovieContainer>
    );
};

export default HomePage;