import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../../movie-api";
import { SearchContainer, SearchForm, ResultsList, NoResultsMessage } from "./MoviesPage.styled";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {

const [movieSearch, setMovieSearch] = useState([]);
const [noResultsFound, setNoResultsFound] = useState(false);
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);    
    
const query = searchParams.get('search'); 
   
useEffect(() => {
    setNoResultsFound(false);

    if(!query) {
        setMovieSearch([]);
        return;
}

const findMovie = async () => {

    try {
        setLoading(true);
        const res = await getMovieSearch(query);
        const movies = res.data.results;
        console.log(movies);
            if (movies.length === 0) {
                setNoResultsFound(true);
            } else {
                setMovieSearch(movies);
            }
        } catch (error) {
            setError(true);
        } finally {
        setLoading(false);
        }

        
}

findMovie();

    }, [query]);


const onSearchQuery = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.search.value;
    setMovieSearch([])
    setSearchParams({ search: searchQuery });
    form.reset();
}


return (
    <SearchContainer>
        <SearchForm onSubmit={onSearchQuery}> 
            <input
                name="search" 
                type="text" 
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
            />
            <button type="submit">Search</button>
        </SearchForm> 
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {query && !noResultsFound && (
            <ResultsList>
                {movieSearch.map (({id, name, title}) => (
                 <li key={id}>
                    <Link to={`${id}`} state={{from:location}} key={id}>
                    {title} {name}
                    </Link>
                 </li>   
                ))}
            </ResultsList>
        )}
        {noResultsFound && <NoResultsMessage>Sorry, there are no results for your query!</NoResultsMessage>}

    </SearchContainer>
    ) 

}

export default MoviesPage;