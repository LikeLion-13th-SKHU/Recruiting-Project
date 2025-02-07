import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 1280px;
  padding-top: 60px;
  padding-bottom: 80px;
`;

export const Main = styled.main`
  width: 100%;
`;
