import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  /* margin-top: 4rem; */
  
  border-radius: 10px;

  color: white;

  

  >h2{
    font-size: 2.4rem;
  }

  >svg{
    color: ${({ theme }) => theme.COLORS.PINK};
    
    margin-top: 0.8rem;
  }
  >p{
    margin-top: 0.8rem;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }

  
`;