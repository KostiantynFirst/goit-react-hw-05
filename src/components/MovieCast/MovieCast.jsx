import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "../../movie-api";
import { Container, MovieInfo, ActorCard, ActorImage, ActorInfo, NoImage, Message } from "./MovieCast.styled";
import Loader from "../Loader/Loader";

const MovieCast = () => {

  const {movieId} = useParams();
  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


    useEffect(() => {
        if(!movieId) return;
          async function getCastDetails() {
            try {
              setLoading(true);
              setError(false);
              const res = await getCast(movieId);
              setCastData(res);
            } catch (error) {
              setError(true);
            } finally {
              setLoading(false)
            }
        }
      
        getCastDetails();

    }, [movieId]);


    return (
        <Container>
        {loading && <Loader />}
        {error && <ErrorMessage />}
          {castData && (
            <MovieInfo>
              {castData.map(({ id, character, name, profile_path }) => (
                <ActorCard key={id}>
                  {profile_path ? (
                    <ActorImage
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <NoImage>No image</NoImage>
                  )}
                  <ActorInfo>
                    <p>
                      <b>Character: </b>
                      {character}
                    </p>
                    <p>
                      <b>Name: </b>
                      {name}
                    </p>
                  </ActorInfo>
                </ActorCard>
              ))}
            </MovieInfo>
          )}
          {!loading && castData.length === 0 && (
            <Message>We don't have information for this movie</Message>
          )}
        </Container>
      );
};

export default MovieCast;