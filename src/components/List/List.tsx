import ListItem from "../ListItem/ListItem";
import * as S from "./List.styles";
import SeparationLine from "../SeparationLine/SeparationLine";

export default function List({ items }: { items: Device[] }) {
  return (
    <>
      <S.ListTitle>Device</S.ListTitle>
      <SeparationLine />
      {items.length ? (
        items.map((item: Device) => <ListItem key={item.id} item={item} />)
      ) : (
        <S.ListFeedback>No Items found</S.ListFeedback>
      )}
    </>
  );
}
