import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  padding: 0.8rem 1.6rem;

  border-radius: 1rem;

  font-size: 1.6rem;

  color:${({ theme }) => theme.COLORS.PINK};

  margin-right: 0.8rem;
  
`;