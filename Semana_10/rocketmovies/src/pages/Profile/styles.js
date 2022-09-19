import styled from "styled-components";

export const Container = styled.div`
  /* height: 100vh; */
  width : 100%;

  >header{
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    /* position: absolute; */

    display: flex;
    align-items: center;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    
    svg{
      font-size: 2.4rem;
      margin-left: 5rem;
      margin-right: 0.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      cursor: pointer;
    }

    a{
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

   
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 34rem;
  margin: 3rem auto 0;
  /* margin: 0 auto; */
  
  .date_email{
    margin-top: 3.4rem;
  }

  .fields .date_email, .fields .passwords, .fields .div-button{
    width: 100%;
    
  }

  .fields{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    width: 100%;
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 1.6rem;

  width: 18.6rem;
  height: 18.6rem;

  >img{
    border-radius: 50%;
    height: 18.6rem;
    width:18.6rem;
  }

  >label{
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    

    input{
      display: none;
    }

    svg{
      width: 2rem;
      height: 2rem;
    }
  }

  
`;
