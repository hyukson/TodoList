import React from "react";
import { SearchStyled } from "./styled";

interface SearchTypes {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  addData: any;
}

const Search = ({ value, onChange, addData }: SearchTypes) => {
  return (
    <SearchStyled onSubmit={addData}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력해주세요. (Enter)"
      />
    </SearchStyled>
  );
};

export default Search;
