import styled from "styled-components";
import { fonts, spacing } from "../../styles";
import { ThemeProps } from "../../styles/themes";
import media from "../../styles/media";

export const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${(props: ThemeProps) => props.theme.pageHeader.textColor};
    font-size: 20px;
  }
  
  ${media.md`
    flex-direction: column;
  `}

`;

export const PageTitle = styled.h1`
  margin: 0;
`;

export const ModalTitle = styled.h1`
  font-size: ${fonts.large}px;
  padding-top: ${spacing.small}px;
  margin-bottom: ${spacing.large}px;
`;

export const ButtonWrapper = styled.div`
  width: 131px;
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.small}px;
`

export const AddDeviceWrapper = styled.div`
  width: ${(props: { width: number }) => props.width};

  ${media.md`
    width: 100%;
    position: relative;
    top: 22px;
  `}

` 