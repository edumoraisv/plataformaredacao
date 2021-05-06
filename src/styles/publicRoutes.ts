import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 32px;

  width: calc(100vw - 64px);
  max-width: 500px;

  h2 {
    font-size: 1.5rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const Header = styled.head`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 32px;

  img {
    max-height: 150px;
  }
`;