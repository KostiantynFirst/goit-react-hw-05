import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '80px'};
  height: ${({ height }) => height || '80px'};
  margin: 0 auto;
`;

