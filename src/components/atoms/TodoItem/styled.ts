import styled from "styled-components";

export const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.6rem;

  button {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 2px solid #e8e8e8;
    color: #e8e8e8;
    font-size: 1.1rem;
    background: none;
    cursor: pointer;
    transition: 0.3s;
  }

  .Todo_content {
    width: 75%;
    transition: 0.3s;
  }

  .Todo_btns {
    display: flex;
    opacity: 0;
    transition: 0.2s;

    div {
      font-size: 1.5rem;
      margin-left: 1rem;
      cursor: pointer;
    }
  }

  &.complete {
    button {
      color: #ae80c7;
      border: 2px solid #ae80c7;
    }

    .Todo_content {
      text-decoration: line-through;
      color: #ae80c7;
    }
  }

  &:hover .Todo_btns {
    opacity: 1;
  }
`;
