import * as S from "./FooterStyles";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Section>
        <S.Title>Contact</S.Title>
        <S.ContactItem
          onClick={() =>
            window.open("https://www.instagram.com/likelion_skhu/?hl=ko")
          }>
          <AiFillInstagram />
          Instagram @likelion_skhu
        </S.ContactItem>
        <S.ContactItem
          onClick={() => window.open("https://github.com/LikeLion-13th-SKHU")}>
          <IoLogoGithub /> Github @LikeLion-13th-SKHU
        </S.ContactItem>
      </S.Section>
      <S.NameSection>
        <S.Title>Credits</S.Title>
        <div>박예은 백하윤</div>
        <div>양라윤 윤현승</div>
      </S.NameSection>
    </S.FooterContainer>
  );
};

export default Footer;
