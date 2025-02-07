import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 30px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 5px 5px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  text-align: center;
  width: 100px;
  background-color: rgba(32, 190, 55, 0.3);
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: #20be37;
  margin-bottom: 5px;
`;

export const NameSection = styled.div`
  margin-top: 10px;
  padding: 15px;

  div {
    margin: 12px 15px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  cursor: pointer;
`;
