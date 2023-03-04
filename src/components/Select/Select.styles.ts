import styled from "styled-components";

interface SelectStyleProps {
  width: number;
  height: number;
}

export const Select = styled.select`
  outline: none;
  border: 1px solid #48446940;
  border-radius: 4px;
  max-width: 100%;
  max-height: 100%;
  height: ${(props: SelectStyleProps) =>
    props.height ? `${props.height}px` : "100%"};
  width: ${(props: SelectStyleProps) =>
    props.width ? `${props.width}px` : "auto"};
  font-size: 14px;
  padding: 0px 12px;
  appearance: none; /* hides the default arrow */
  background: url("/icons/caret-down.svg") no-repeat right center; /* adds a custom arrow */
  background-position: right 10px center; /* moves the arrow to the left */
  background-size: 10px; /* sets the size of the arrow */
  cursor: pointer;
  outline: none;
`;

export const OptionItem = styled.option``;
