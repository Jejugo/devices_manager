import React from "react";
import * as S from "./Button.style";

export default function Button({
  title,
  type,
  variant,
  tabIndex,
  width,
  disabled,
  onClick,
}: {
  title: string;
  variant?: string;
  type: string;
  tabIndex?: number;
  width?: number;
  disabled?: boolean;
  onClick?: (e: any) => void;
}) {
  return (
    <S.Button
      onClick={onClick}
      variant={variant}
      type={type}
      tabIndex={tabIndex}
      width={width}
      disabled={disabled}
    >
      {title}
    </S.Button>
  );
}
