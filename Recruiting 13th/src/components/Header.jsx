import { useNavigate } from "react-router-dom";
import { HeaderSt, Logo, Item, Link } from "./HeaderStyles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderSt>
      <Logo
        src="/images/logo.png"
        alt="로고"
        onClick={() => navigate("/")} // 새로고침 없이 홈으로 이동
      />
      <Item>
        <ul>
          <Link onClick={() => navigate("/")}>About</Link>
          <Link onClick={() => navigate("/project")}>프로젝트</Link>
          <Link onClick={() => navigate("/curri")}>커리큘럼</Link>
          <Link onClick={() => navigate("/apply")}>지원하기</Link>
        </ul>
      </Item>
    </HeaderSt>
  );
};

export default Header;
