import React from 'react';
import { SearchStyled } from './styled';

import { BsPlusLg } from 'react-icons/bs';

interface SearchTypes {
  value: string,
  onChange: any,
  addData: any
}

const Search = ({ value, onChange, addData }: SearchTypes) => {

  return (
    <SearchStyled onSubmit={addData}>
      <input type="text" value={value} onChange={onChange} placeholder='할일을 입력해주세요.' />
      <button>
        <BsPlusLg />
      </button>
    </SearchStyled>
  );
}

export default Search;