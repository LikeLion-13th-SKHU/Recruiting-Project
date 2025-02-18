import { useState } from "react";
import styled from "styled-components";
import media from "../styles/Media";
const QnAContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80vw;
  height: 20%;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  width: 100%;
`;

const QuestionButton = styled.button`
  width: 80%;
  text-align: left;
  font-weight: bold;
  font-size: 100%;
  padding: 10px;
  padding-left: 40px;
  background-color: rgba(32, 190, 55, 0.3);
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 119, 16, 0.3);
  }
  ${media.mobile} {
    font-size: 14px;
    padding: 10px;
    padding-left: 20px;
  }
`;

const AnswerContainer = styled.div`
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${(props) => (props.isOpen ? "160px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  width: 80%; /* 버튼과 같은 크기 */
  text-align: left;
  padding-left: 40px;
  ${media.mobile} {
    font-size: 14px;
  }
`;

const AnswerText = styled.p`
  padding: 10px;
  color: #4b5563;
  width: 100%;
`;

const QnATitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 6rem;
  margin-top: 25vw;
  ${media.mobile} {
    margin-bottom: 100px;
    margin-top: 20rem;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
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
        "A: 물론입니다! 멋쟁이 사자처럼 수업은 코딩 경험이 없는 비전공자를 대상으로 하고 있기 때문에 지원가능합니다. 다만, 모든 활동과 수업에 대해 열심히 임할 열정과 각오는 준비되어 있어야 하고 자신만의 아이디어를 가지고 있다면 누구나 지원할 수 있습니다.",
    },
    {
      question: "Q. 노트북이 있어야하나요?",
      answer: "멋쟁이 사자처럼 활동시 노트북은 반드시 있어야합니다",
    },
    {
      question: "Q. 아이디어톤 해커톤에 꼭 참여해야 하나요?",
      answer:
        "둘 중 아무것도 참여하지 않으면 수료증이 발급되지 않습니다. 준비된 커리큘럼을 잘 따라오시면 충분히 해내실 수 있도록 도와드리겠습니다!",
    },
    {
      question: "Q. 회비가 있나요?",
      answer:
        "4만원의 회비가 존재합니다. 자세한 것은 합격자 OT에서 설명드리겠습니다.",
    },
    {
      question: "Q. 활동 요일이 궁금해요!",
      answer:
        "매주 화, 수 18시에 진행됩니다. 전체 세션, 파트별 세션으로 진행됩니다.",
    },
    {
      question: "Q. 모집인원이 어떻게 되나요?",
      answer: "비밀입니다.",
    },
    {
      question: "Q. 세션 진행 방법이 궁금합니다.",
      answer:
        "화, 수 정기 모임에 운영진들이 직접 하는 강의로 진행이 됩니다. 또한 매주 1회, 강의와 관련된 과제와 이에 대한 피드백이 진행됩니다.",
    },
    {
      question: "Q. 경쟁률은 어떻게 되나요?",
      answer: "그간 경쟁률을 통합한 결과 약 3.5대 1입니다.",
    },
    {
      question: "Q. 타동아리 중복 지원해서 가입 가능한가요?",
      answer:
        "강의와 과제 등, 멋사에 할애해야하는 시간이 상당하기 때문에 교내 IT동아리와 중복 지원은 지양하는 것을 추천드립니다.",
    },
    {
      question: "Q. 면접은 어떻게 진행되나요?",
      answer: "교내 강의실을 대여하여 오프라인으로 진행할 예정입니다.",
    },
  ];

  return (
    <QnAContainer>
      <QnATitle>QnA</QnATitle>
      {qnaList.map((item, index) => (
        <QuestionWrapper key={index}>
          <QuestionButton onClick={() => toggleAnswer(index)}>
            {item.question}
          </QuestionButton>
          <AnswerContainer isOpen={openIndex === index}>
            <AnswerText>{item.answer}</AnswerText>
          </AnswerContainer>
        </QuestionWrapper>
      ))}
    </QnAContainer>
  );
};

export default HsQnAPage;
