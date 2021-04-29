import React from "react"
import styled from "styled-components"

const TitleArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 1 / 4;
  }
  @media (min-width: 1000px){
    grid-column: 1 / 2;
  }
`

const Title = styled.h1`
  margin: 2rem 0 0;
  @media (min-width: 769px){
    margin-bottom: 2.125rem;
  }
`

const ContentArea = styled.div`
  grid-column: 1 / 4;
  @media (min-width: 769px) {
    grid-column: 1 / 4;
    h2,
    p {
      margin-top: 0;
    }
  }
  @media (min-width: 1000px){
    grid-column: 2 / 4;
  }
`

const PageIntro = ({ title, subTitle, paragraph }) => {
  return (
    <>
      <TitleArea>
        <Title>{title}</Title>
      </TitleArea>
      <ContentArea>
        <h2>{subTitle}</h2>
        <p>{paragraph}</p>
      </ContentArea>
    </>
  )
}

export default PageIntro
