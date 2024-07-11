import { useEffect, useState, useRef, Suspense} from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesInfo } from "../../movie-api";
import { MainWrapper, BackLink, InfoBox, InfoLinksList, InfoItemLink } from "./MovieDetailsPage.styled";
import { MovieDetailsComponent } from "../../components/MovieInfo/MovieInfo";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {

    const [movieDetails, setMovieDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from);
    const { movieId } = useParams();
   

    useEffect(() => {
        if (!movieId) return;
        async function getMovieDetails() {
            try {
                setLoading(true);
                setError(false);
                const res = await getMoviesInfo(movieId);
                if (res.data.length === 0) {
                    return;
                }
                setMovieDetails(res.data);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getMovieDetails();


    }, [movieId]);

    
    
    return (

        <MainWrapper>
            <BackLink to={backLinkLocation.current ?? '/'}>
            Go back
            </BackLink>

            {loading && <Loader /> }
            {error && <ErrorMessage />}
            
            {movieDetails && <MovieDetailsComponent movieInfoDetails={movieDetails} />}

            <InfoBox>
                <p>Additional information</p>
                <InfoLinksList>
                    <li>
                        <InfoItemLink to={'cast'}>Cast</InfoItemLink>
                    </li>
                    <li>
                        <InfoItemLink to={'reviews'}>Reviews</InfoItemLink>
                    </li>

                </InfoLinksList>

            </InfoBox>

        <Suspense fallback={<Loader />}>
             <Outlet />
         </Suspense>

        </MainWrapper>

    );

    
  
};

export default MovieDetailsPage;  