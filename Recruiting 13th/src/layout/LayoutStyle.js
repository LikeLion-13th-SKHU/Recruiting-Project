import styled from "styled-components";

export const LayoutWrapper = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

export const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* max-width: 1280px; */
  padding-top: 66px;
  padding-bottom: 80px;
`;

export const Main = styled.main `
  width: 100%;
`;