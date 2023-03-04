import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import ListItem from "../ListItem/ListItem";
import * as S from "./List.style";

export default function List({ items }: { items: Device[] }) {
  return (
    <>
      <S.ListTitle>Device</S.ListTitle>
      <hr></hr>
      {items.map((item: Device) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
}
