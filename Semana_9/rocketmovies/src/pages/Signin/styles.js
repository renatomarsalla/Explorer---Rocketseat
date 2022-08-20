import styled from "styled-components";
import backgroundimage from '../../assets/backgroundSignin.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  padding: 23.5rem 13.4rem;

  text-align: center;
  
  

  >h1{
    font-size:4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >h2{
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  >p{
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  >a{
    margin-top: 4.2rem;
    font-size: 1.6rem;
    color:${({ theme }) => theme.COLORS.PINK}; 

    
  }

  

  
`;

export const Background = styled.div`
  flex:1;
  background: url(${backgroundimage}) no-repeat center center;
  background-size: cover;

`;

