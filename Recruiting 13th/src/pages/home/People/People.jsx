import * as S from "./PeopleStyles";

const People = () => {
  return (
    <S.PeopleContainer>
      <S.TitleContainer>
        <S.Title>13기 운영진</S.Title>
        <S.RowBar />
      </S.TitleContainer>

      <S.ContentContainer>
        {/* Frontend */}
        <S.PartWrapper>
          <S.ContentTitle>Frontend</S.ContentTitle>
          <S.FrontNameWrapper>
            <S.TopWrapper>
              <S.Name>박예은</S.Name>
              <S.Name>백하윤</S.Name>
            </S.TopWrapper>
            <S.BottomWrapper>
              <S.Name>양라윤</S.Name>
              <S.Name>윤현승</S.Name>
            </S.BottomWrapper>
          </S.FrontNameWrapper>
        </S.PartWrapper>

        <S.ColumnBar />

        {/* Backend */}
        <S.PartWrapper>
          <S.ContentTitle>Backend</S.ContentTitle>

          <S.BackNameWrapper>
            <S.TopWrapper>
              <S.Name>
                <S.LeaderBadge
                  src='/images/leader.png'
                  alt='대표'
                />
                안준영
              </S.Name>
              <S.Name>박세은</S.Name>
              <S.Name>유하영</S.Name>
            </S.TopWrapper>
            <S.BottomWrapper>
              <S.Name>이예은</S.Name>
              <S.Name>정다운</S.Name>
              <S.Name>조규림</S.Name>
            </S.BottomWrapper>
          </S.BackNameWrapper>
        </S.PartWrapper>
      </S.ContentContainer>
    </S.PeopleContainer>
  );
};

export default People;
