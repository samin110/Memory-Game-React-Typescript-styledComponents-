import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(204, 204, 204);
  background: linear-gradient(90deg, rgba(204, 204, 204, 1) 16%, rgba(245, 241, 241, 1) 76%);
  display: grid;
  grid-template-columns: 15% 80%;
  padding: 1rem;
  column-gap: 2rem;
  grid-template-rows: 1fr;
  justify-content: center;
`;
