import React from "react";
import "./Home.css";
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
                  <a href="https://www.linkedin.com/in/salimdaroueche/">
                    <button className="btn_shadow">
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>

                  <a href="https://github.com/salimdrch">
                    <button className="btn_shadow">
                      <i class="fab fa-github"></i>
                    </button>
                  </a>
                  
                  <a href="mailto:salim.drch@gmail.com">
                    <button className="btn_shadow">
                      <i class="fa fa-envelope"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
