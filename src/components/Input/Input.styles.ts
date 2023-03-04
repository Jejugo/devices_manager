import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  border: 1px solid #48446940;
  border-radius: 4px;
  max-width: 100%;
  height: 38px;
  font-size: 14px;
  padding: 0px 12px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
`;
