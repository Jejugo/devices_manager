import styled from "styled-components";
import { fonts, spacing } from "../../styles";

export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #211f33;
    font-size: 20px;
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
`;

export const ModalTitle = styled.h1`
  font-size: ${fonts.large}px;
  padding-top: 8px;
  margin-bottom: 24px;
`;
