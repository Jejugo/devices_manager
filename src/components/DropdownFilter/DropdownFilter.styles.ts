import styled from "styled-components";
import { radius } from "../../styles";
import { ThemeProps } from "../../styles/themes";
import media from "../../styles/media";

export const DropdownFilterContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: ${radius.small}px;
  background-color: ${(props: ThemeProps) => props.theme.input.backgroundColor};

  ${media.md`
    flex-direction: column;
    height: 38px;
    width: 100%;
  `}
`;
