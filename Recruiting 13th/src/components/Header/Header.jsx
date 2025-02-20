import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./HeaderStyles";
import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // 메뉴 바깥 클릭 시 닫기
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // 페이지 이동 시 isOpen 닫기
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <S.HeaderSt ref={menuRef}>
      <S.Logo
        src='/images/logo.png'
        alt='로고'
        onClick={() => (window.location.href = "/")}
      />

      <S.MenuBtn onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <AiOutlineClose
            size={15}
            color='black'
          />
        ) : (
          <AiOutlineMenu
            size={15}
            color='black'
          />
        )}
      </S.MenuBtn>

      <S.Item isOpen={isOpen}>
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
