import { useEffect, useState, useRef, Suspense} from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesInfo } from "../../movie-api";
import { MainWrapper, BackLink, InfoBox, InfoLinksList, InfoItemLink } from "./MovieDetailsPage.styled";
import { MovieDetailsComponent } from "../../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {

    const [movieDetails, setMovieDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from);
    const { movieId } = useParams();
   

    useEffect(() => {
        if(!movieId){
            return;
        }

        const getMovieDetails = async () => {
            const res = await getMoviesInfo(movieId);
            if (res.data.length === 0) {
                return;
            }
            setMovieDetails(res.data);
            setLoading(false);
        }
        
        getMovieDetails();


    }, [movieId]);

    
    
    return (

        <MainWrapper>
            <BackLink to={backLinkLocation.current ?? '/'}>
            Go back
            </BackLink>

            {!loading && <MovieDetailsComponent movieInfoDetails={movieDetails} />}

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

        <Suspense fallback={<div>Loading...</div>}>
             <Outlet />
         </Suspense>

        </MainWrapper>

    );

    
  
};

export default MovieDetailsPage;  