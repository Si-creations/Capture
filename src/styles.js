import styled from "styled-components";

// Styled Component *1

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  color: white;
  margin-bottom: 3rem;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
