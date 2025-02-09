import { useEffect } from "react";
import Main from "./Main/Main";
import About from "./About/About";
import People from "./People/People";
import Timeline from "./Timeline/Timeline";
import * as S from "./HomeStyles";
import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
};

const Home = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []); // 새로고침 후에 최상단 위치 유지되도록

  return (
    <S.HomeWrapper>
      <Main />
      <Section>
        <About />
      </Section>
      <Section>
        <Timeline />
      </Section>
      <Section>
        <People />
      </Section>
    </S.HomeWrapper>
  );
};

export default Home;
