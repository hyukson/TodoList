import React, {useState} from 'react';
import Search from './components/Search/Search';

const ls = localStorage;

const App = () => {
  const [list, setList] = useState<any[]>([]);

  const [searchValue, setSearchValue] = useState('');

  const addData = (content: string) => {
    const data: object = { content };
 
    setList([...list, data]);
  }

  // 할 일 입력창의 벨류가 바뀔때 마다
  const onChange = (e: any) => {
    setSearchValue(e.value);  
  }

  return (
    <div>
      <Search addData={addData} onChange={onChange} value={searchValue} />
    </div>
  );
}

export default App;
