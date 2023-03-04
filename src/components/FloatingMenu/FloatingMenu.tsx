import React from "react";
import * as S from "./FloatingMenu.styles";

export interface MenuPosition {
  top: number;
  left: number;
}

export default function FloatingMenu({
  menuPosition,
  children,
}: {
  menuPosition: MenuPosition;
  children: React.ReactNode;
}) {
  return (
    <S.FloatingMenu menuPosition={menuPosition}>{children}</S.FloatingMenu>
  );
}
