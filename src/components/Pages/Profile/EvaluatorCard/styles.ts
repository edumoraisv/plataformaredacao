import styled from 'styled-components';

// interface RatingContainerProps {}

export const EvaluatorContainer = styled.div`
  background-color: #ffffff;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid rgba(42, 70, 112, 0.1);
  div {
    font-family: 'Open Sans';
  }
  .gradedEssaysText {
    margin-top: 8px;
    font-weight: bold;
    font-size: 14px;
    color: rgb(78, 82, 104);
  }
  .gradedEssays {
    margin-top: 0 !important;
    font-weight: bold;
    font-size: 16px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border: 1px solid #131735;
    object-fit: cover;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  div:nth-child(2) {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
  }
  .bottomText {
    font-size: 14px;
    font-weight: 600;
    color: #4b4f65;
    margin-top: 9px;
    /* font-weight: 700; */
  }
`;

export const PenSVG = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
  cursor: pointer;
`;
