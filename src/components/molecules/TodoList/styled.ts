import styled from "styled-components";

export const TodoListStyled = styled.div`
  height: 20rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e8e8e8;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 5px;
  }
`;
