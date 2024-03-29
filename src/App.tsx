import React, { useEffect, useMemo, useState } from "react";

import SearchForm from "./components/SearchForm";
import TodoList from "./components/TodoList";

import { TodoListWrapStyled } from "./styled";

const ls = localStorage;

interface TodoItemTypes {
  idx: number;
  title: string;
  isComplete: Boolean;
}

// 완료된 할일 갯수 구하기
const getCompleteCount = (list: Array<TodoItemTypes>): number => {
  return list.filter((v) => v.isComplete).length;
};

// 날짜
const getDateFormat = (date: Date): string => {
  const labels = ["년", "월", "일"];

  return new Date(date)
    .toISOString()
    .split("T")[0]
    .split("-")
    .map((v) => v + labels.shift())
    .join(" ");
};

const App = () => {
  const [list, setList] = useState<Array<TodoItemTypes>>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const formatDate = getDateFormat(new Date());

  // loadstorage data load
  useEffect(() => {
    setList(JSON.parse(ls["TodoList"] || "[]"));
  }, []);

  // loadstorage data save
  useEffect(() => {
    ls["TodoList"] = JSON.stringify(list);
  }, [list]);

  const addData = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      return alert("내용을 입력해주세요.");
    }

    const idx = list[list.length - 1]?.idx + 1 || 0;

    const data: TodoItemTypes = {
      idx,
      title: searchValue,
      isComplete: false,
    };

    setList([...list, data]);
    setSearchValue("");
  };

  // 할 일 입력창의 벨류가 바뀔때 마다
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // 지우기
  const onRemove = (idx: Number) => {
    setList(list.filter((v) => v.idx !== idx));
  };

  // 완료
  const onCompletion = (idx: Number) => {
    setList(
      list.map((v) => (v.idx === idx ? { ...v, isComplete: !v.isComplete } : v))
    );
  };

  // 완료한 할 일
  const count = useMemo(() => getCompleteCount(list), [list]);

  return (
    <TodoListWrapStyled>
      <p className="title left">일정 목록</p>
      <p className="title right">TODO LIST</p>

      <div className="Header">
        <h2>{formatDate}</h2>

        <p>
          할 일 <b>{list.length}</b>개 / 완료된 일 <b>{count}</b>개
        </p>
      </div>

      <SearchForm addData={addData} onChange={onChange} value={searchValue} />

      <TodoList list={list} onRemove={onRemove} onCompletion={onCompletion} />
    </TodoListWrapStyled>
  );
};

export default App;
