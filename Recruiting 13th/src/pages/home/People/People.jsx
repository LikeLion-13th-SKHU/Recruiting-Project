import * as S from "./PeopleStyles";

const People = () => {
  return (
    <S.PeopleContainer>
      <S.TitleContainer>
        <S.Title>13기 운영진</S.Title>
        <S.RowBar />
      </S.TitleContainer>

      <S.ContentContainer>
        <S.ContentTitle>Frontend</S.ContentTitle>
        <S.ContentNameWrapper>
          <S.Name>박예은&nbsp;&nbsp;&nbsp;&nbsp;백하윤</S.Name>
          <S.Name>양라윤&nbsp;&nbsp;&nbsp;&nbsp;윤현승</S.Name>
        </S.ContentNameWrapper>

        <S.ColumnBar />

        <S.ContentTitle>Backend</S.ContentTitle>
        <S.ContentNameWrapper>
          <S.Leader
            src='../../../../public/images/대표.png'
            alt='대표'
          />
          <S.Name>안준영&nbsp;박세은&nbsp;유하영</S.Name>
          <S.Name>이예은&nbsp;정다운&nbsp;조규림</S.Name>
        </S.ContentNameWrapper>
      </S.ContentContainer>
    </S.PeopleContainer>
  );
};

export default People;
