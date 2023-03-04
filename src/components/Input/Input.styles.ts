import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

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

export const Label = styled.label`
  margin-bottom: 4px;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
`;
