import styled from "styled-components";
import { fonts } from "../../styles";

interface ModalOverlayProps {
  isOpen: boolean;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  @media screen {
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;
    display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;

    background-color: rgba(35, 27, 34, 0.48);

    z-index: 15;
  }
`;

interface ModalContainerProps {
  mobileFullSize: boolean;
  width: number;
}

const mobileMarginBottom = "60px";

export const ModalContainer = styled.div<ModalContainerProps>`
  @media screen {
    max-height: ${({
      mobileFullSize,
      height,
    }: {
      mobileFullSize: boolean;
      height: number;
    }) => (mobileFullSize ? "100vh" : `auto`)};
    max-width: ${({
      mobileFullSize,
      width,
    }: {
      mobileFullSize: boolean;

      width: number;
    }) => (mobileFullSize ? "100vw" : `auto`)};
    width: ${({
      mobileFullSize,
      width,
    }: {
      mobileFullSize: boolean;

      width: number;
    }) => (mobileFullSize ? "100vw" : `auto`)};
    height: ${({
      mobileFullSize,
      height,
    }: {
      mobileFullSize: boolean;
      height: number;
    }) => (mobileFullSize ? "100vh" : `auto`)};
    padding: 24px;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    color: #545454;
    line-height: 20px;
    margin-bottom: ${mobileMarginBottom};
  }
`;

interface BodyProps {
  height: number;
  width: number;
  mobileFullSize: boolean;
}

export const Body = styled.div<BodyProps>`
  @media screen {
    font-size: 1rem;

    ${({ height }: { height: string }) => height && `height: ${height}px;`}
    ${({ width }: { width: string }) => width && `width: ${width}px;`}

    overflow-y: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    ${({ mobileFullSize }: { mobileFullSize: boolean }) =>
      mobileFullSize && "height: 100vh;"}
  }

  @media print {
    overflow: visible;
  }

  > div > div {
    @media print {
      overflow: visible;
      position: initial;
      margin: initial;
      top: initial;
      right: initial;
      left: initial;
      bottom: initial;
    }
  }
`;

Body.displayName = "Body";

export const Footer = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  align-self: flex-end;
  padding-top: 10px;

  @media print {
    display: none;
  }
`;

ModalOverlay.displayName = "ModalOverlay";

export const CloseButton = styled.img`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

CloseButton.displayName = "CloseButton";

export const ScrollSection = styled.section`
  width: calc(100% - 10px);
  height: 100%;

  @media print {
    max-width: 100%;
    max-height: 100%;
  }
`;

ScrollSection.displayName = "ScrollSection";

export const ModalTitle = styled.h1`
  font-size: ${fonts.large}px;
  padding-top: 8px;
  margin-bottom: 24px;
`;
