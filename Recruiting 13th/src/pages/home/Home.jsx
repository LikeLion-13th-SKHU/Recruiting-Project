import Main from "./Main/Main";
import About from "./About/About";
import People from "./People/People";
import Timeline from "./Timeline/Timeline";
import * as S from "./HomeStyles";
const Home = () => {
  return (
    <S.HomeWrapper>
      <Main />
      <About />
      <Timeline />
      <People />
    </S.HomeWrapper>
  );
};

export default Home;
