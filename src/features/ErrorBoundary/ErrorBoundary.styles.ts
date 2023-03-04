import styled from "styled-components";
import { colors } from "../../styles";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightGrey};
  height: 80vh;
`;

export const ErrorHeading = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  width: 50%;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ErrorStackTrace = styled.pre`
  font-family: monospace;
  font-size: 1rem;
  white-space: pre-wrap;
  margin-bottom: 1rem;
`;

export const ErrorButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: none;
  z-index: 2;
`;

export const CoffeImage = styled.img`
  position: absolute;
  top: 0px;
  opacity: 0.2;
  z-index: 1;
`;
