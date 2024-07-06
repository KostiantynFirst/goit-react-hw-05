import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../../movie-api";
import { ReviewsContainer, ReviewsInfolist, ReviewItem, AuthorInfo, AuthorAvatar, AuthorName, ReviewContent, NoInfoMessage } from "./MovieReviews.styled";

const MovieReviews = () => {
    const {movieId} = useParams();
    const [reviewsDetails, setReviewsDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!movieId) {
            return;
        }

        const getReviewsDetails = async () => {
            const res = await getReviews(movieId);
            setReviewsDetails(res.data.results);
            setLoading(false);
        }

        getReviewsDetails();
    }, [movieId, setReviewsDetails]);

    return (
        <ReviewsContainer>

    {!loading && reviewsDetails.length > 0 ? (
        <ReviewsInfolist>
            {reviewsDetails.map(({id, author, content, author_avatar }) => (
                <ReviewItem key={id}>
                    <AuthorInfo>
                        {author_avatar && <AuthorAvatar src={author_avatar} alt="Author Avatar" />}
                        <AuthorName>{author}</AuthorName>
                    </AuthorInfo>
                    <ReviewContent>{content}</ReviewContent>
                </ReviewItem>
                // console.log(content)
            ))
            }
        </ReviewsInfolist>
    ) : (
        <NoInfoMessage>We don't have information for this movie</NoInfoMessage>
    )}
        </ReviewsContainer>
)
}

export default MovieReviews;