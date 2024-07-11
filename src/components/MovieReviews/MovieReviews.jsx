import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../../movie-api";
import { ReviewsContainer, ReviewsInfolist, ReviewItem, AuthorInfo, AuthorAvatar, AuthorName, ReviewContent, NoInfoMessage } from "./MovieReviews.styled";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage" 

const MovieReviews = () => {
    const {movieId} = useParams();
    const [reviewsDetails, setReviewsDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); 

    useEffect(() => {
        if (!movieId) return;
        async function getReviewsDetails() {
            try {
                setLoading(true);
                setError(false);
                const res = await getReviews(movieId);
                setReviewsDetails(res.data.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getReviewsDetails();
    }, [movieId, setReviewsDetails]);

    return (
        <ReviewsContainer>
            {loading && <Loader />}
            {error && <ErrorMessage />}

            {reviewsDetails && (
            <ReviewsInfolist>
            {reviewsDetails.map(({id, author, content, author_avatar }) => (
                <ReviewItem key={id}>
                    <AuthorInfo>
                        {author_avatar && <AuthorAvatar src={author_avatar} alt="Author Avatar" />}
                        <AuthorName>{author}</AuthorName>
                    </AuthorInfo>
                    <ReviewContent>{content}</ReviewContent>
                </ReviewItem>
            ))
            }
        </ReviewsInfolist>
            )}
            {!loading && !reviewsDetails.length && (
                <NoInfoMessage>We don't have information for this movie</NoInfoMessage>
            )}

        </ReviewsContainer>
)
}

export default MovieReviews;