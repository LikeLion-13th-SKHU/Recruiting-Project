import { useEffect, useState } from "react";
import * as S from "./MainStyles";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Main = () => {
  const scrollY = useMotionValue(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = (event) => {
      const currentScroll = scrollY.get();

      if (currentScroll < 1) {
        event.preventDefault();
        scrollY.set(Math.min(currentScroll + event.deltaY * 0.0005, 1));
        setTextOpacity((prev) => Math.min(prev + event.deltaY * 0.0005, 1));
      }

      if (currentScroll >= 1) {
        setIsFixed(false);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollY]);

  const scale = useTransform(scrollY, [0, 1], [1.2, 1]);
  const imgOpacity = useTransform(scrollY, [0, 1], [1, 0.2]);

  return (
    <S.MainContainer>
      <S.MainImg
        src='../../../../public/images/멋사 로고.png'
        as={motion.img}
        style={{
          scale,
          opacity: imgOpacity,
          position: isFixed ? "fixed" : "absolute",
        }}
      />

      <S.MainTextWrapper style={{ opacity: textOpacity }}>
        <S.TextG>Growl To Growth</S.TextG>
        <S.TextM1>멋쟁이</S.TextM1>
        <S.TextM2Wrapper>
          <S.TextM2>사자처럼</S.TextM2>
          <S.TextS>SKHU</S.TextS>
        </S.TextM2Wrapper>
        <S.TextL>
          성공회대학교 멋쟁이사자처럼은
          <br />
          당신의 내일과 가장 가까운 오늘을 만듭니다.
        </S.TextL>
      </S.MainTextWrapper>
    </S.MainContainer>
  );
};

export default Main;
