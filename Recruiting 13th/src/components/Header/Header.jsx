import { useNavigate } from "react-router-dom";
import * as S from "./HeaderStyles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderSt>
      <S.Logo
        src='/images/logo.png'
        alt='로고'
        onClick={() => navigate("/")} // 새로고침 없이 홈으로 이동
      />
      <S.Item>
        <ul>
          <S.Link onClick={() => navigate("/")}>About</S.Link>
          <S.Link onClick={() => navigate("/project")}>프로젝트</S.Link>
          <S.Link onClick={() => navigate("/curri")}>커리큘럼</S.Link>
          <S.Link onClick={() => navigate("/apply")}>지원하기</S.Link>
        </ul>
      </S.Item>
    </S.HeaderSt>
  );
};

export default Header;
