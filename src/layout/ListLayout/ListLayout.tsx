import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function ListLayout({
  children,
  pageHeaderTitle,
  buttonText,
}: {
  children: React.ReactNode;
  pageHeaderTitle: string;
  buttonText: string;
}) {
  return (
    <>
      <PageHeader title={pageHeaderTitle} buttonText={buttonText}></PageHeader>
      <main>{children}</main>
    </>
  );
}
