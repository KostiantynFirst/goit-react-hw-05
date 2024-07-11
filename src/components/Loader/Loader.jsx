import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color={'var(--main-color)'}
          radius="9"
          ariaLabel="three-dots-loading"
        />
    </LoaderWrapper>

  );
}