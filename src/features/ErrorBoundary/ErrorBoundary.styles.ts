import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const ErrorHeading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
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
`;
