import styled from "styled-components";

export const App = styled.div`
  background-color: rgb(56, 56, 99);
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieContainer = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  width: 200px;
  height: 400px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  overflow: hidden;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Overview = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(242, 238, 238, 0.1);
  color: white;
  padding: 10px;
  overflow: auto;
  z-index: 1;
  ${MovieContainer}:hover & {
    display: block;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ddd;
`;

export const Img = styled.div`
  width: 200px;
  height: 300px;
`;
