import styled from "styled-components";
import { fonts, radius, spacing } from "../../styles";
import media from "../../styles/media";
import { ThemeProps } from "../../styles/themes";

interface SelectStyleProps {
  width: number;
  height: number;
}

export const Select = styled.select`
  outline: none;
  border: 1px solid #48446940;
  border-radius: ${radius.small}px;
  max-width: 100%;
  max-height: 100%;
  height: ${(props: SelectStyleProps) =>
    props.height ? `${props.height}px` : "100%"};
  width: ${(props: SelectStyleProps) =>
    props.width ? `${props.width}px` : "auto"};
  font-size: ${fonts.small}px;
  padding: 0px ${spacing.medium}px;
  appearance: none; /* hides the default arrow */
  background: url("/icons/caret-down.svg") no-repeat right center; /* adds a custom arrow */
  background-position: right 10px center; /* moves the arrow to the left */
  background-size: 10px; /* sets the size of the arrow */
  cursor: pointer;
  outline: none;
  background-color: ${(props: ThemeProps) => props.theme.input.backgroundColor};
  color: ${(props: ThemeProps) => props.theme.color};

  ${media.md`
    width: 100%;
    height: 38px;
  `}

`;

export const OptionItem = styled.option`
  color: ${(props: ThemeProps) => props.theme.color};
`;
