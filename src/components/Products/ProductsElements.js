import styled from "styled-components";

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fafafa;
  color: #0a0a0a;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;
`;

export const ProductImg = styled.img`
  height: 210px;
  min-width: 210px;
  max-width: 100%;
  box-shadow: 8px 8px #f9c74f;
  border-radius: 5px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.p`
  font-weight: 700;
  font-size: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1rem;
  border: none;
  border-radius: 5px;
  background: #006466;
  color: #fafafa;
  transition: 0.2 ease-out;

  &:hover {
    background: #f9c74f;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #0a0a0a;
  }
`;
