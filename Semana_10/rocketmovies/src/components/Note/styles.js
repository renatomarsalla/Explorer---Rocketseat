import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  cursor: pointer;

  >h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: white;
    /* color: ${({ theme }) => theme.COLORS.WHITE}; */
  }

  >footer{
    width: 100%;
    display: flex;
    margin-top: 24px;
    
  }

  /* .seeMore{
    width: 100px;
    background-color: red;
  }
  .seeMore a{
    color:${({ theme }) => theme.COLORS.PINK};
    justify-content: left;
  } */

 
`;