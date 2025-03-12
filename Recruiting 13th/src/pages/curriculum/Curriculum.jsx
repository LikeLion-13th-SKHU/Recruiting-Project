import { useState } from "react";
import * as S from "./CurriculumStyles";

const tracks = [
  {
    name: "프론트엔드",
    content: <img src="/images/frontend.png" />,
  },
  {
    name: "백엔드",
    content: <img src="/images/backend.png" />,
  },
  {
    name: "AI",
    content: <img src="/images/ai.png" />,
  },
];

const Curriculum = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);

  return (
    <S.CurriculumWrapper>
      <S.TitleContainer>
        <S.Title>커리큘럼</S.Title>
        <S.RowBar />
      </S.TitleContainer>
      <S.BtnContainer>
        {tracks.map((track, index) => (
          <S.Btn
            key={index}
            onClick={() => setSelectedTrack(index)}
            isActive={selectedTrack === index}
          >
            {track.name}
          </S.Btn>
        ))}
      </S.BtnContainer>

      <S.Image>{tracks[selectedTrack].content}</S.Image>
    </S.CurriculumWrapper>
  );
};

export default Curriculum;
