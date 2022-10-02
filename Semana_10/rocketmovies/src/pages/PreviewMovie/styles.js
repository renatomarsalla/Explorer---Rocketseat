import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  

  .page{
    width: 114rem;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .page .back{
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.6rem;
    gap:0.8rem;
    width: 100rem;

    >svg{
      font-size: 1.6rem;
      color:${({ theme }) => theme.COLORS.PINK}
    }

    >a{
      font-size: 1.6rem;
      color:${({ theme }) => theme.COLORS.PINK}
    }
  }

  .title{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
    color: white;
    gap:1.6rem;

    >h2{
      font-size: 3.6rem;
    }
  }

  .star{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2rem;
    display: flex;
    align-items: center;

    >svg{
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-top: 0.5rem;
    }
  }

  .by{
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
    gap: 1.6rem;
    
  }

  .by .author{
    display: flex;
    gap: 0.8rem;
    align-items: center;
    

    >img{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    >h3{
      font-size: 1.6rem;
      color: white;
      font-weight: 400;
    }
  }

  .by .date{
    display: flex;
    gap: 0.8rem;
    align-items: center;

    >svg{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      color:${({ theme }) => theme.COLORS.PINK};
    }

    >h3{
      font-size: 1.6rem;
      color: white;
      font-weight: 400;
    }
  }

  .tags{
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap:0.8rem;

    >span{
      font-size: 1.6rem;
      color: gray;
      background-color:${({ theme }) => theme.COLORS.BACKGROUND_700};
      ;
    }
  }

  .resume{
    margin-top: 4rem;

    >p{
      font-size: 1.6rem;
      text-align: justify;
      padding-right: 2.4rem;
      color: white;
      
    }
  }

  .deleteNote{
    /* width: 5rem; */
    margin-top: 0.8rem;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  overflow-y: auto;

  height: 58rem;

`;