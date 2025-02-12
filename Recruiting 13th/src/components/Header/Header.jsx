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
        onClick={() => (window.location.href = "/")} // 새로고침 발생->사자 애니메이션 때문에 새로고침 필요함
      />
      <S.Item>
        <ul>
          <S.Link
            onClick={() => (window.location.href = "/")}
            style={{
              color: location.pathname === "/" ? "#20BE37" : "inherit",
              fontWeight: location.pathname === "/" ? "bolder" : "normal",
            }}>
            About
          </S.Link>
          <S.Link
            onClick={() => navigate("/project")} // 새로고침 없이 홈으로 이동
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
