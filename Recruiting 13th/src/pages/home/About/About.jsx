import { useState } from "react";
import * as S from "./AboutStyles";

const contents = [
  {
    title: "정기 세션",
    text: "매주 화, 수요일 6시에 정기 세션을 진행합니다. 총 5번의 공통 세션과 각 파트별 세션을 통해 개발 지식을 학습합니다.",
    img: "/images/section.jpeg",
  },
  {
    title: "아이디어톤",
    text: "팀프로젝트를 통해 실현하고 싶은 아이디어(웹서비스)를 발표하는 자리이며 전국의 멋대 학생들이 모여 아이디어를 공유하는 네트워킹의 장입니다.",
    img: "/images/idea.png",
  },
  {
    title: "해커톤",
    text: "실제 아이디어가 구현되는 축제의 장입니다. 수 주간의 아이디어 빌드업과 프로그래밍에 이어 해커톤 당일의 밤샘 코딩 및 최종 발표를 통해 아이디어를 구현하고 소개합니다.",
    img: "/images/hack.png",
  },
  {
    title: "네트워킹",
    text: "성공회대 멋사만의 MT, OT, 조지미 제도, 세미나 등 학교 선배, 후배, 동기와 친해지고 더불어 함께 스터디 할 수 있는 기회를 얻을 수 있습니다",
    img: "/images/mt.png",
  },
];

const About = () => {
  const [selected, setSelected] = useState(0);

  return (
    <S.AboutContainer>
      <S.TitleContainer>
        <S.Title>About</S.Title>
        <S.RowBar />
      </S.TitleContainer>

      <S.AboutTxtContainer>
        멋쟁이 사자처럼은
        <br />
        자신이 생각했던 아이디어를 구체화하고
        <br />
        프로그래밍 교육을 통해 웹서비스 구현을 목표로 하는 동아리입니다.
      </S.AboutTxtContainer>

      <S.AboutBtnContainer>
        {contents.map((content, index) => (
          <S.AboutBtn
            key={index}
            onClick={() => setSelected(index)}
            isActive={selected === index}>
            {content.title}
          </S.AboutBtn>
        ))}
      </S.AboutBtnContainer>

      <S.AboutContentContainer>
        <S.AboutContentImg src={contents[selected].img} />
        <S.AboutContentTxtWrapper>
          <S.AboutContentTxtTitle>
            {contents[selected].title}
          </S.AboutContentTxtTitle>
          <S.AboutContentTxtsection>
            {contents[selected].text}
          </S.AboutContentTxtsection>
        </S.AboutContentTxtWrapper>
      </S.AboutContentContainer>
    </S.AboutContainer>
  );
};

export default About;
