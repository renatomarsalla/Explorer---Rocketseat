import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  align-items: center;
  justify-content: space-around;
  gap: 6.4rem;

  border-bottom: solid 1px gray;

  color: white;

  .name-logout-img{
    display: flex;
    align-items: center;
    gap: 0.8rem;

   
  }

  .name-img img{
    width: 6.4rem;
    height: 6.4rem;
    border-radius:50%;
  }

  .name-logout {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    text-align: right;
    color: red;
   
  }

  

  .name-logout a{
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_150};
  }

  >h2{
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;