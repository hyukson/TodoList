import styled from 'styled-components';

export const SearchStyled = styled.form`
  display: flex;
  align-items: center;
  
  input[type="text"] {
    width: 100%;
    height: 60px;
    border-radius: 0.6rem;
    padding-left: 1.5rem;
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
