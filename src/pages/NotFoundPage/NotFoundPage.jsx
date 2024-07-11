import { IoIosArrowBack } from 'react-icons/io';
import { NotFoundContainer, NotFoundTitle, NotFoundLink } from "./NotFoundPage.styled"

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Not found such page!</NotFoundTitle>
      <NotFoundLink to="/">
        <IoIosArrowBack />
        <p>Back to home page!</p>
      </NotFoundLink>
    </NotFoundContainer>
  );
}

export default NotFoundPage;