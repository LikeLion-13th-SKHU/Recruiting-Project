import * as S from "./TimelineStyles";

const Timeline = () => {
  return (
    <S.TimelineContainer>
      <S.TitleContainer>
        <S.Title>타임라인</S.Title>
        <S.RowBar />
      </S.TitleContainer>
      <S.TimelineImgContainer src='/images/timeline.png' />
    </S.TimelineContainer>
  );
};

export default Timeline;
