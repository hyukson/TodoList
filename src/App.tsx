import { Console } from 'console';
import React, {useEffect, useMemo, useState} from 'react';

import Search from './components/Search';

import TodoList from './components/TodoList/list';
import TodoItem from './components/TodoList/item';
import TodoTitle from './components/TodoTitle';

import './index.css';

interface TodoItemTypes {
  idx: number;
  content: string; 
  isComplete: Boolean;
}

const ls = localStorage;

const getCompleteCount = (list: Array<TodoItemTypes>) => {
  return list.filter(v => v.isComplete).length;
}

const App = () => {
  const [list, setList] = useState<any[]>([]);

  // load
  useEffect(() => {
    setList(JSON.parse(ls['TodoList'] || []));
  }, []);

  // save
  useEffect(() => {
    ls['TodoList'] = JSON.stringify(list);
  }, [list]);

  const [searchValue, setSearchValue] = useState<string>('');

  const addData = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      return alert("내용을 입력해주세요.");
    }

    const idx = list[list.length-1]?.idx + 1 || 0;

    const data: TodoItemTypes = { idx, content: searchValue, isComplete: false };

    setList([...list, data]);
    setSearchValue('');
  }

  // 할 일 입력창의 벨류가 바뀔때 마다
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);  
  } 

  // 지우기
  const onRemove = (idx: Number) => {
    if (window.confirm('정말 삭제하겠습니까?')) {
      setList(list.filter(v => v.idx !== idx));
    }
  }
  
  // 완료
  const onCompletion = (idx: Number) => {
    setList(list.map(v => v.idx === idx ? {...v, isComplete: true} : v));
  }

  const listAllSelect = () => {

  }

  const count = useMemo(() => getCompleteCount(list), [list]);

  return (
    <div className="wrap">
      <div className="Todo_wrap">
        <div>
          <input type="checkbox" onChange={listAllSelect} />
          <TodoTitle title={'TodoList'} />
        </div>
        <Search addData={addData} onChange={onChange} value={searchValue} />
        <TodoTitle title={`할일 리스트 (${count} / ${list.length})`} />
        <TodoList>
          {list.map(v => 
            <TodoItem 
              content={v.content} 
              idx={v.idx}
              onRemove={onRemove}
              onCompletion={onCompletion}
              key={v.idx}
              />
            )}
        </TodoList>
      </div>
    </div>
  );
}

export default App;
