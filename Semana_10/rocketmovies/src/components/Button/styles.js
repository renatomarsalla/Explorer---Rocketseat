import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  /* height: 5.6rem; */

  background-color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;

  /* margin-top: 2.4rem; */

  border-radius: 10px;
  border: none;

  font-weight: 700;

  cursor: pointer;

  padding: 1.6rem 0;

  

  &:hover{
    background-color: #DB7093;
  }

  
`;