import { colors } from '@styles/colors';
import { Container } from '@styles/general';
import styled from 'styled-components';

export const RequestContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  cursor: pointer;
  padding: 12px;
  text-align: center;
  font-weight: bold;

  :hover {
    box-shadow: 2px 8px 16px ${colors.menuShadow};
  }
`;
