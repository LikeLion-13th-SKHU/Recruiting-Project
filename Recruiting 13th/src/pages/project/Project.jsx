import { useState } from "react";
import { motion } from "framer-motion";
import "./project.css";

const projects = [
  {
    title: "검진 비서",
    description: "검진 비서는 주변 병원 예약을 도와주는 프로젝트입니다.",
    image: "/images/beseo.png",
    team: "오동재, 서연진, 박예은, 박연지",
  },
  {
    title: "PeteFit",
    description:
      "PeteFit은 친구들과 대결을 통해 건강함을 얻을 수 있는 웹서비스입니다.",
    image: "/images/petefit.png",
    team: "백하윤, 조규림, 이예은, 정희서",
  },
  {
    title: "Plantificaiton",
    description:
      "Plantificaiton은 식물을 통해 마음 건강을 챙겨주는 프로젝트입니다.",
    image: "/images/planti.png",
    team: "양라윤, 홍경욱, 주영빈, 박연지",
  },
  {
    title: "CaloDump",
    description:
      "CaloDump는 현대인들의 건강한 다이어트를 돕는 기록형 웹앱 서비스입니다.",
    image: "/images/calo.png",
    team: "박예은, 이슬아, 안준영, 오동재, 류현우",
  },
  {
    title: "RERE",
    description:
      "RERE는 중고 인테리어 제품 거래를 통한 거주환경 개선 및 정신건강 회복 서비스입니다.",
    image: "/images/rere.png",
    team: "김신희, 정다연, 조성수, 윤현승",
  },
  {
    title: "스소일기",
    description: "스소일기는 일기를 통해 스트레스를 관리하는 서비스입니다.",
    image: "/images/스소.png",
    team: "양라윤, 최기웅, 김시은",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='slider-container'>
      <div className='title-container'>
        <div className='slider-title'>프로젝트</div>
        <div className='row-bar'></div>
      </div>
      <div className='slider-content'>
        <div className='slider-image-wrapper'>
          <motion.img
            key={projects[currentIndex].image}
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className='slider-image'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className='slider-text-wrapper'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <h2 className='slider-title-text'>
              {projects[currentIndex].title}
            </h2>
            <p className='slider-description'>
              {projects[currentIndex].description}
            </p>
            <p className='slider-team'>{projects[currentIndex].team}</p>
          </motion.div>
        </div>
      </div>
      <div className='slider-controls'>
        <button
          onClick={handlePrev}
          className='slider-button'>
          이전
        </button>
        <button
          onClick={handleNext}
          className='slider-button'>
          다음
        </button>
      </div>
    </div>
  );
};

export default Project;
