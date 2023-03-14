import styled from 'styled-components';

export const ImageListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 18px;
`;

export const CardDelete = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;
