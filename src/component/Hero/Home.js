import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Salim Daroueche</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Full Stack Developer🧑‍💻.",
                    " Apprentice DevOps enginee👨‍💻.",
                    " Security & Cloud computing ☁️.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Seeking a challenging position in an innovative & state-of-the-art
              company. Interested in the entire cloud and working on ambitious
              projects with positive people.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>

                <button className="btn_shadow">
                  <i class="fab fa-github"></i>
                </button>
                <button className="btn_shadow">
                  <i class="fab fa-docker"></i>
                </button>
                <button className="btn_shadow">
                  <i class="fab fa-discord"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
