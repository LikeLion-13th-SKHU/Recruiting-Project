import styled from "styled-components";
import { motion } from "framer-motion";
import media from "../../../styles/Media";

export const MainContainer = styled.div`
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

export const MainImg = styled(motion.img)`
  width: 65%;
  height: auto;
  transition: position 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTextWrapper = styled.div``;

export const TextG = styled.div`
  font-size: 25px;
  margin-right: 200px;
  margin-bottom: -10px;
  font-weight: bold;

  ${media.mobile} {
    font-size: 13px;
    margin-right: 95px;
    margin-bottom: -5px;
  }
`;

export const TextM1 = styled.div`
  font-size: 120px;
  margin-left: -90px;
  font-weight: bolder;

  ${media.mobile} {
    font-size: 60px;
    margin-left: -40px;
  }
`;

export const TextM2Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;

  ${media.mobile} {
  }
`;

export const TextM2 = styled.div`
  font-size: 120px;
  font-weight: bolder;

  ${media.mobile} {
    font-size: 60px;
  }
`;

export const TextS = styled.div`
  font-size: 35px;
  color: #20be37;
  padding-bottom: 10px;
  font-weight: bold;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export const TextL = styled.div`
  font-size: 22px;
  line-height: 150%;

  ${media.mobile} {
    font-size: 15px;
  }
`;
