import styled from "styled-components";

export const SearchStyled = styled.form`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;

  input[type="text"] {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 2px solid #ae80c7;
  }

  button {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -3.5rem;
  }
`;
