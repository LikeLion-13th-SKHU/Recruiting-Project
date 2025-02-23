import { useState } from "react";
import styled from "styled-components";
import media from "../styles/Media";
import { IoIosArrowDown } from "react-icons/io";

const QnAContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 75%;
  height: auto;
  margin-bottom: 200px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.isOpen ? "rgba(255, 119, 16, 0.2)" : "rgba(32, 190, 55, 0.2)"};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;

const QuestionButton = styled.div`
  width: 95%;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  padding: 5px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile} {
    font-size: 12px;
    padding: 10px;
  }
`;

const AnswerText = styled.p`
  padding: 30px 0 10px;
  border-top: solid 1px black;
  text-align: left;
  width: 95%;

  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  ${media.mobile} {
    font-size: 13px;
  }
`;

const QnATitle = styled.div`
  font-size: 50px;
  font-family: "Pretendard-Bold";
  display: flex;
  justify-content: center;
  margin: 0px auto;

  ${media.tablet} {
    font-size: 40px;
  }

  ${media.mobile} {
    font-size: 25px;
  }
`;

const TitleContainer = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const RowBar = styled.div`
  width: 280px;
  border-top: 1.5px solid black;
  margin-top: 20px;

  ${media.tablet} {
    width: 200px;
    margin-top: 20px;
  }

  ${media.mobile} {
    width: 130px;
    margin-top: 15px;
    border-top: 1px solid black;
  }
`;

const HsQnAPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const qnaList = [
    {
      question: "Q. 초보(비전공자, 코딩 입문자)인데 가입해도 되나요?",
      answer:
        "A. 물론입니다! 멋쟁이 사자처럼 수업은 코딩 경험이 없는 비전공자를 대상으로 하고 있기 때문에 지원가능합니다. 다만, 모든 활동과 수업에 대해 열심히 임할 열정과 각오는 준비되어 있어야 하고 자신만의 아이디어를 가지고 있다면 누구나 지원할 수 있습니다.",
    },
    {
      question: "Q. 노트북이 있어야하나요?",
      answer:
        "A. 멋쟁이사자처럼 13기 활동을 위해선 반드시 개인 노트북이 필요합니다.",
    },
    {
      question: "Q. 아이디어톤, 해커톤에 꼭 참여해야 하나요?",
      answer:
        "A. 둘 중 하나라도 참여하지 않으면 수료증이 발급되지 않습니다. 준비된 커리큘럼을 잘 따라오시면 충분히 해내실 수 있도록 도와드리겠습니다!",
    },
    {
      question: "Q. 회비가 있나요?",
      answer: "A. 동아리 유지비로 3만원의 회비가 존재합니다.",
    },
    {
      question: "Q. 활동 요일이 궁금해요!",
      answer:
        "A. 매주 화, 수 19시 30분에 진행됩니다. 전체 세션, 파트별 세션으로 진행됩니다. 활동 요일과 시간은 추후 변경될 수 있습니다.",
    },
    {
      question: "Q. 모집 인원이 어떻게 되나요?",
      answer: "A. 모집 인원은 아직 확정되지 않았습니다.",
    },
    {
      question: "Q. 세션 진행 방법이 궁금합니다.",
      answer:
        "A. 화, 수 정기 모임에 운영진들이 직접 하는 강의로 진행이 됩니다. 또한 매주 1회, 강의와 관련된 과제와 이에 대한 피드백이 진행됩니다.",
    },
    {
      question: "Q. 경쟁률은 어떻게 되나요?",
      answer: "A. 그간 경쟁률을 통합한 결과 약 3.5대 1입니다.",
    },
    {
      question: "Q. 타동아리 중복 지원해서 가입 가능한가요?",
      answer:
        "A. 강의와 과제 등, 멋사에 할애해야 하는 시간이 상당하기 때문에 교내 IT동아리와 중복 지원은 지양하는 것을 추천드립니다.",
    },
    {
      question: "Q. 면접은 어떻게 진행되나요?",
      answer: "A. 교내 강의실에서 오프라인으로 진행할 예정입니다.",
    },
  ];

  return (
    <QnAContainer>
      <TitleContainer>
        <QnATitle>Q&A</QnATitle>
        <RowBar />
      </TitleContainer>

      {qnaList.map((item, index) => (
        <QuestionWrapper
          key={index}
          isOpen={openIndex === index}
          onClick={() => toggleAnswer(index)}
        >
          <QuestionButton>
            {item.question}
            <IoIosArrowDown />
          </QuestionButton>
          <AnswerText isOpen={openIndex === index}>{item.answer}</AnswerText>
        </QuestionWrapper>
      ))}
    </QnAContainer>
  );
};

export default HsQnAPage;
