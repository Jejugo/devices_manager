import React from "react";
import * as S from "./Button.style";

export default function Button({
  title,
  type,
  color,
  onClick,
}: {
  title: string;
  color?: string;
  type: string;
  onClick?: (e: any) => void;
}) {
  return (
    <S.Button onClick={onClick} color={color} type={type}>
      {title}
    </S.Button>
  );
}
