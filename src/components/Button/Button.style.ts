import styled from "styled-components";

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) => props.color || "#337ab7"};
  font-size: 14px;
  color: ${(props: ButtonProps) =>
    props.color === "red" ? "#fff" : "#000000"};
  border: ${(props: ButtonProps) => (props.color === "red" ? "none" : "#eee ")};
  border-radius: 4px;
  padding: 12px;
  width: 121px;
  cursor: pointer;
`;
