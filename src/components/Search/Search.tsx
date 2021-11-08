import React from 'react';
import './styled.scss';

interface SearchType {
  value: string,
  onChange: any,
  addData: Function
}

const Search = ({ value, onChange, addData }: SearchType) => {
  return (
    <div className="search_form">
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => addData(value)}>추가</button>
    </div>
  );
}

export default Search;