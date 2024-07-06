import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../../movie-api";
import { SearchContainer, SearchForm, ResultsList, NoResultsMessage } from "./MoviesPage.styled";

const MoviesPage = () => {

const [movieSearch, setMovieSearch] = useState([]);
const [noResultsFound, setNoResultsFound] = useState(false);
const location = useLocation();
const [searchParams, setSearchParams ] = useSearchParams();
const query = searchParams.get('search'); 
   
useEffect(() => {
    setNoResultsFound(false);

    if(!query) {
        setMovieSearch([]);
        return;
}

const findMovie = async () => {

    try {
        const res = await getMovieSearch(query);
        const movies = res.data.results;
        console.log(movies);
            if (movies.length === 0) {
                setNoResultsFound(true);
            } else {
                setMovieSearch(movies);
            }
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
        
}

findMovie();

    }, [query]);


const onSearchQuery = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.search.value;
    setSearchParams({search: searchQuery });
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
                // value={query}
                // onChange={onSearchQuery} 
            />
            <button type="submit">Search</button>
        </SearchForm> 
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