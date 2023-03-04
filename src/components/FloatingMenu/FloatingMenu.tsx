import React from "react";
import * as S from "./FloatingMenu.styles";

export interface MenuPosition {
  top: number;
  left: number;
}

export default function FloatingMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <S.FloatingMenu role="menu">
      <S.FloatingMenuList>{children}</S.FloatingMenuList>
    </S.FloatingMenu>
  );
}
