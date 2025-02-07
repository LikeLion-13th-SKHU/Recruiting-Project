import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, ContentWrapper, Main } from "./LayoutStyle";
const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <Main>
          <Outlet />
        </Main>
      </ContentWrapper>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
