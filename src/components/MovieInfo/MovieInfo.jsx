import { MovieContainer, PosterImage, MovieDetails, NoImage, MovieTitle, InfoParagraph, OverviewHeading, GenresHeading, GenreList, GenreItem, UserScore, Status, OverviewText, GenreBadge } from "./MovieInfo.styled";

export const MovieDetailsComponent = ({ movieInfoDetails }) => {
    const { title, original_title, release_date, overview = 'There is no overview', vote_average, genres = [], poster_path, status,} = movieInfoDetails;


    const date = new Date(release_date).getFullYear();
    const userRate = Math.round(vote_average * 10);
    // console.log(vote_average);

    return (
        <MovieContainer>
            {poster_path ? (
                <PosterImage src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="poster" />
            ) : (
                <NoImage>No image</NoImage>
            )}
            <MovieDetails>
                <MovieTitle>
                    {title}/{original_title}
                </MovieTitle>
                <InfoParagraph>
                    <b>Release date: </b> {date}
                </InfoParagraph>
                <InfoParagraph>
                    <b>User Score: </b>
                  <UserScore>{userRate}%</UserScore>  
                </InfoParagraph>
                <InfoParagraph>
                    <b>Status: </b> 
                    <Status>{status}</Status>
                </InfoParagraph>
                <OverviewHeading>Overview</OverviewHeading>
                <OverviewText>{overview}</OverviewText>
                <GenresHeading>Genres</GenresHeading>
                <GenreList>
                    {genres.map(genre => (
                        <GenreItem key={genre.id}>
                            <GenreBadge>{genre.name}</GenreBadge>
                        </GenreItem>
                    ))}
                </GenreList>
                </MovieDetails>
            </MovieContainer>

    );

};