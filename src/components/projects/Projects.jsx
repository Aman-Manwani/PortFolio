import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "./Projects.css";
import Project1 from "../../utils/Project1.png";
import Project2 from "../../utils/Project2.png";
import Project3 from "../../utils/Project3.png";
import Project5 from "../../utils/Project5.png";
import Typewriter from "typewriter-effect";
import { useRef } from "react";


SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const Project = () => {
  const annoOne = useRef(null);
  return (
    <div className="projects">
      <div className="projects-top">
        <h1 className="projects-head">Worthy <span className="color_00abf0"> Projects</span></h1>
        <div className="projects-subhead">
          <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Most Recent Work")
                  .pauseFor(4000)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
              ref={annoOne}
            />
        </div>
      </div>
      <div className="swiper home-swiper">
        <Swiper
          spaceBetween={30}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-size": "45px",
          }}
        >
          <SwiperSlide>
            <img src={Project1} alt="" className="project-img" />
            <div className="project-descrip">
              <div className="project-heading">Multilingual Collaborative Compiler</div>
              <div className="project-description">
                A multi-language compiler to run your programming codes with your fellow developers  
              </div>
              <div className="project-btns">
                <button className="project-btn2 btn-about">
                  <a href="https://github.com/Aman-Manwani/Multilingual-Compiler" target="_blank" rel="noopener noreferrer">Code → </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Project5} alt="" className="project-img" />
            <div className="project-descrip">
              <div className="project-heading">Jenkins CI/CD Pipeline</div>
              <div className="project-description">
                Production grade CI/CD pipeline with use of security tools like Trivy and Sonarqube and Argo CD monitoring like Prometheus and Grafana
              </div>
              {/* <div className="project-btns">
                <button className="project-btn2 btn-about">
                  <a href="https://github.com/Aman-Manwani/Netflix-Clone" target="_blank" rel="noopener noreferrer">Code →</a>
                </button>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Project2} alt="" className="project-img" />
            <div className="project-descrip">
              <div className="project-heading">Admin DashBoard</div>
              <div className="project-description">
                Responsive to all Devices, with SyncFusion Library and animated UI components
              </div>
              <div className="project-btns">
                <button className="project-btn2 btn-about">
                  <a href="https://github.com/Aman-Manwani/Admin-Dashboard" target="_blank" rel="noopener noreferrer">Code → </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Project3} alt="" className="project-img" />
            <div className="project-descrip">
              <div className="project-heading">Crypto Tracker</div>
              <div className="project-description">
                Website for Tracking Cryptocurrency Data i.e Volume, Price and many more ...
              </div>
              <div className="project-btns">
                <button className="project-btn2 btn-about">
                  <a href="https://github.com/Aman-Manwani/Crypto-Price-Tracker" target="_blank" rel="noopener noreferrer">Code →</a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Project;
