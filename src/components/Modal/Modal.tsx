import { FunctionComponent, ReactNode } from "react";

import * as S from "./Modal.styles";
import ReactPortal from "../Portal/Portal";

interface ModalProps {
  title: string;
  text?: string;
  width: number;
  height: number;
  mobileFullSize: boolean;
  footerComponent?: ReactNode;
  isOpen: boolean;
  onCloseButton: () => void;
  children?: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({
  title,
  text,
  width,
  height,
  children,
  mobileFullSize,
  onCloseButton,
  footerComponent,
  isOpen,
}) => {
  return (
    <ReactPortal wrapperId="modal">
      <S.ModalOverlay isOpen={isOpen}>
        <S.ModalContainer
          width={width}
          height={height}
          mobileFullSize={mobileFullSize}
        >
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.CloseButton onClick={onCloseButton} src="icons/CloseIcon.svg" />
          {text && <S.ModalText>{text}</S.ModalText>}
          {children && (
            <S.Body width={width - 60} mobileFullSize={mobileFullSize}>
              {children}
            </S.Body>
          )}

          {footerComponent && <S.Footer>{footerComponent}</S.Footer>}
        </S.ModalContainer>
      </S.ModalOverlay>
    </ReactPortal>
  );
};

export default Modal;
