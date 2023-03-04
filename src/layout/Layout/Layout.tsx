import React from "react";
import Header from "../../components/Header/Header";

import * as S from "./Layout.styles";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
    </>
  );
}
