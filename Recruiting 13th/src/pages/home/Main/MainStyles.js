import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.div `
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  font-weight: 1000;
`;

export const MainImg = styled(motion.img)
`
  width: 65%;
  height: auto;
  transition: position 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTextWrapper = styled.div ``;

export const TextG = styled.div `
  font-size: 25px;
  margin-right: 200px;
  margin-bottom: -10px;
`;

export const TextM1 = styled.div `
  font-size: 120px;
  margin-left: -90px;
`;

export const TextM2Wrapper = styled.div `
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const TextM2 = styled.div `
  font-size: 120px;
`;

export const TextS = styled.div `
  font-size: 35px;
  color: #20be37;
  padding-bottom: 10px;
`;

export const TextL = styled.div `
  font-size: 22px;
  line-height: 150%;
`;