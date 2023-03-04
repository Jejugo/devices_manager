import React from "react";
import * as S from "./ModalFooter.styles";

export default function ModalFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.ModalFooter>{children}</S.ModalFooter>;
}
