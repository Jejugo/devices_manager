import { FunctionComponent, ReactNode } from "react";

import * as S from "./Modal.styles";
import ReactPortal from "../Portal/Portal";

interface ModalProps {
  width: number;
  height: number;
  mobileFullSize: boolean;
  footerComponent?: ReactNode;
  isOpen: boolean;
  onCloseButton: () => void;
  children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({
  width,
  height,
  children,
  mobileFullSize,
  onCloseButton,
  footerComponent,
  isOpen,
}) => {
  return (
    <ReactPortal wrapperId="partners-modal">
      <S.ModalOverlay isOpen={isOpen}>
        <S.ModalContainer width={width} mobileFullSize={mobileFullSize}>
          <S.CloseButton onClick={onCloseButton} />
          <S.Body
            height={height}
            width={width - 60}
            mobileFullSize={mobileFullSize}
          >
            {children}
          </S.Body>
          {footerComponent && <S.Footer>{footerComponent}</S.Footer>}
        </S.ModalContainer>
      </S.ModalOverlay>
    </ReactPortal>
  );
};

export default Modal;
