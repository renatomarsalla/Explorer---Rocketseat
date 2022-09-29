import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  

  .page{
    margin: 0 auto;
    width: 114rem;
    margin-top: 4rem;
    overflow-y: auto;
  }

  .back{
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .back a, .back svg{
    font-size: 1.6rem;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  
  .newMovie{
    font-size: 3.6rem;
    color: white;
    margin-top: 2.4rem;
  }

  .titleAndNote{
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
  }

  .mark{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: left;

    >h2{
      font-size: 2rem;
      color: gray;
    }
  }

  .mark .section{
    width: 100%;
    height: 8.8rem;
    background-color: black;
    border-radius: 1rem;
    border: none;
    display: flex;   
  }

  

  .btns{
    display: flex;
    gap: 4rem;
    margin-top: 4rem;
    margin-bottom: 9.3rem;
  }

  .btnBlack button{
    width: 54rem;
    height: 5.6rem;
    border-radius: 1rem;
    border: none;
    background-color: black;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
    padding: 1.6rem 0;
    font-size: 1.6rem;
  }

  .btnBlack button:hover{
    background-color: #000510;
  }

  


`;

export const Content = styled.div`
  height: 78.3rem;
  width: 100%;
  overflow-y: auto;
`;