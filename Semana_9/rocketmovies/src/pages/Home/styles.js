import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */

  .page{
    width: 114rem;
    margin: 5rem auto 0;
  }
  .my-movies{
    display: flex;
    justify-content: space-between;

    >h2{
    color: white;
    font-size: 3.2rem;
  }
  }

  .buttonAdd{
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    padding: 1.4rem 3.2rem;
    gap: 0.8rem;
    border-radius: 0.8rem;
    border: none;
    font-size: 1.6rem;
    color: black;
    text-decoration: none

    svg{
      font-size: 1.6rem;
    }

    a{
      text-decoration: none;
      color: black;
    }
    
  }

  .buttonAdd button{
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.BLACK};
    
  }

  .section{
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-top: 3rem;
    
  }

  .tags{
    display: flex;
    gap: 0.8rem;
    align-items: center;

    >a{
      margin-left: 75rem;
      font-weight: 400;
      color:${({ theme }) => theme.COLORS.PINK};
      font-size: 1.4rem;
    }
  }

  
  
`;

export const Content = styled.div`
  overflow-y: auto;

  height: 70rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  margin-top: 3rem;
`;