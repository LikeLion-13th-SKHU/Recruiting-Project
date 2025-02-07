import {
  FooterContainer,
  Section,
  Title,
  NameSection,
  ContactItem,
} from "./FooterStyles";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Title>Contact</Title>
        <ContactItem
          onClick={() =>
            window.open("https://www.instagram.com/likelion_skhu/?hl=ko")
          }
        >
          <AiFillInstagram />
          Instagram @likelion_skhu
        </ContactItem>
        <ContactItem
          onClick={() => window.open("https://github.com/LikeLion-13th-SKHU")}
        >
          <IoLogoGithub /> Github @LikeLion-13th-SKHU
        </ContactItem>
      </Section>
      <NameSection>
        <Title>Credits</Title>
        <div>박예은 백하윤</div>
        <div>양라윤 윤현승</div>
      </NameSection>
    </FooterContainer>
  );
};

export default Footer;
