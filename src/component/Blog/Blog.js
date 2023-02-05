import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"

const Blog = () => {
  return (
    <>
     <section className="Skills" id="skills">
        <div className="container top">
          <div className="heading text-center">
            <h4>6+ YEARS OF EXPERIENCE</h4>
            <h1>My Skills</h1>
          </div>

          <div className="content-section mtop d_flex">
            <div className="left">
              <div className="heading">
                <h4>2017-2023</h4>
                <h1>Advanced</h1>
              </div>

              <div className="content">
                {BlogApi.map((val, index) => {
                  if (val.category === "Advanced") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div className="left">
              <div className="heading">
                <h4>2017-2023</h4>
                <h1>Intermediate</h1>
              </div>

              <div className="content">
                {BlogApi.map((val, index) => {
                  if (val.category === "Intermediate") {
                    return (
                      <Card
                        key={index}
                        title={val.title}
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div className="left">
              <div className="heading">
                <h4>2017-2023</h4>
                <h1>Beginner</h1>
              </div>

              <div className="content">
                {BlogApi.map((val, id) => {
                  if (val.category === "Beginner") {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
