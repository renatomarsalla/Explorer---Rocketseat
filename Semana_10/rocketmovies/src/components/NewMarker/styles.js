import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: auto 1.6rem;
  height: 5.6rem;
  /* width: auto; */

  border-radius: 1rem;
  padding: 1.6rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  /* color: red; */

  border: ${({ isNew }) => isNew ? `1px dashed gray` : "none"};

  >button{
    border: none;
    background:none;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }
  >input{
    border: none;
    background:none;
    color: ${({ isNew }) => isNew ? "gray" : "white"};
    /* color:red; */
    text-align: center;
    height: 5.6rem;
    text-decoration:none;

    &::placeholder{
    color: grey;
  }

    
  }

  
  
  `
