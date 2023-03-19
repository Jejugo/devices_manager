import React from "react";
import * as S from "./Button.style";

export default function Button({
  title,
  type,
  variant,
  width,
  disabled,
  onClick,
}: {
  title: string;
  variant?: string;
  type: string;
  width?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <S.Button
      onClick={onClick}
      variant={variant}
      type={type}
      width={width}
      disabled={disabled}
    >
      {title}
    </S.Button>
  );
}
