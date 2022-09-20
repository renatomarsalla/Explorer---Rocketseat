import styled from "styled-components";
import backgroundimage from '../../assets/backgroundSignin.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  /* justify-content: center; */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 23rem 13.6rem;

  

  >h1{
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >h2{
    margin: 4.8rem 0;
    font-size: 2.4rem;
    color: white;
  }

  >p{
    font-size: 1.4rem;
    color: gray;
  }

  >a{
    margin-top: 4.2rem;
    font-size: 1.6rem;
    color:${({ theme }) => theme.COLORS.PINK}; 
  }

  .back{
    display: flex;
    margin-top: 4rem;
    align-items: center;
    gap: 1rem;

    >svg{
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    a{
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  
`;

export const Background = styled.div`
  flex:1;
  background: url(${backgroundimage}) no-repeat center center;
  background-size: cover;

`;