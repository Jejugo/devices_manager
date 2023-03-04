import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 4px;
`;

export const Select = styled.select`
  outline: none;
  border: 1px solid #48446940;
  border-radius: 4px;
  max-width: 100%;
  height: 38px;
  font-size: 14px;
  margin-bottom: 12px;
  padding: 0px 12px;

  :first-child {
    color: grey;
  }
`;

export const OptionItem = styled.option``;
