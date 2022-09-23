import styled from "styled-components";

export const Container = styled.button`
  background:transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK};

  margin-top: 0.5rem;

  cursor: pointer;

  font-size: 1.6rem;

  text-align: right;

  
`;