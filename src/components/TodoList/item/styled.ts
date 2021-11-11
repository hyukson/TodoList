import styled from 'styled-components';

export const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
  
  .Todo_content {
    width: 80%;
  }

  &.complete {
    color: green;
    
    input[type=":checked"] {
      border: 2px solid green;
    }
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
  
  &:hover .Todo_btns {
    opacity: 1;
  }
`;