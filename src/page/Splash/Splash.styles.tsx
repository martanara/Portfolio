import styled from "styled-components";

interface StyledRightSectionProps {
  img: string;
}

export const StyledSplash = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 25px;
    &span {
      font-weight: 700;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StyledLeftSection = styled.div`
  flex: 1;
  margin-left: 20px;
`

export const StyledRightSection = styled.div<StyledRightSectionProps>`
    flex: 2;
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
`
