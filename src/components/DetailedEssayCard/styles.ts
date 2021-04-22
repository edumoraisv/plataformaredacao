import { colors } from '@styles/colors';
import styled from 'styled-components';

interface EssayCardProps {
  width: string;
}

export const EssayCardContainer = styled.div<EssayCardProps>`
  padding: 12px;

  min-width: 300px;
  width: ${(props) => props.width};

  border: 1px solid ${colors.normalBorder};

  h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    text-align: justify;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  b {
    font-size: 10px;
    font-weight: 400;

    color: #484d6d;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const StarsCounter = styled.div`
  display: flex;

  align-items: center;

  a {
    margin-left: 8px;
    cursor: default;

    font-size: 12px;
    font-weight: 600;
  }
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  b {
    font-weight: 600;
    font-size: 12px;

    color: #131735;
  }

  img {
    height: 20px;
    width: 20px;

    border-radius: 50%;

    margin-left: 8px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;
