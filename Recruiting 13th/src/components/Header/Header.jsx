import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./HeaderStyles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.HeaderSt>
      <S.Logo
        src='/images/logo.png'
        alt='로고'
        onClick={() => navigate("/")} // 새로고침 없이 홈으로 이동
      />
      <S.Item>
        <ul>
          <S.Link
            onClick={() => navigate("/")}
            style={{
              color: location.pathname === "/" ? "#20BE37" : "inherit",
              fontWeight: location.pathname === "/" ? "bolder" : "normal",
            }}>
            About
          </S.Link>
          <S.Link
            onClick={() => navigate("/project")}
            style={{
              color: location.pathname === "/project" ? "#20BE37" : "inherit",
              fontWeight:
                location.pathname === "/project" ? "bolder" : "normal",
            }}>
            프로젝트
          </S.Link>
          <S.Link
            onClick={() => navigate("/curriculum")}
            style={{
              color:
                location.pathname === "/curriculum" ? "#20BE37" : "inherit",
              fontWeight:
                location.pathname === "/curriculum" ? "bolder" : "normal",
            }}>
            커리큘럼
          </S.Link>
          <S.Link
            onClick={() => navigate("/apply")}
            style={{
              color: location.pathname === "/apply" ? "#20BE37" : "inherit",
              fontWeight: location.pathname === "/apply" ? "bolder" : "normal",
            }}>
            지원하기
          </S.Link>
        </ul>
      </S.Item>
    </S.HeaderSt>
  );
};

export default Header;
