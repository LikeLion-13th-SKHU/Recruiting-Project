import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import * as S from "./LayoutStyle";
const Layout = () => {
  return (
    <S.LayoutWrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.Main>
          <Outlet />
        </S.Main>
      </S.ContentWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
