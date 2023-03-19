import * as S from "./DropdownFilter.styles";
import Select from "../Select/Select";

interface DropdownProps {
  items: {
    id: string;
    name: string;
    value: string;
  }[];
  value: string;
  width?: number;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function DropdownFilter({
  items,
  value,
  width,
  description,
  onChange,
}: DropdownProps) {
  return (

    <S.DropdownFilterContainer>
      <Select
        value={value}
        description={description}
        onChange={onChange}
        placeholder="All"
        items={items}
        width={width}
      />
    </S.DropdownFilterContainer>
  );
}

// {
/* <option value="All">{title}: All</option>
{items.map((item) => (
  <option
    key={item.id}
    value={item.value}
  >{`${title}: ${item.name}`}</option>
))} */
// }
