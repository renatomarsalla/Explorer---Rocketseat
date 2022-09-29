import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  color: white;

  resize: none;

  margin-top: 4rem;
  margin-bottom: 4rem;

  &::placeholder{
    color: white;
  }
`;