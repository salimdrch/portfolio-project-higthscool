import React, { useState } from "react";
//import contact1 from "./contact1.png";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact</h1>
          </div>

          <div className="content d_center">
            <div className="right box_shodow">
              <div className="box box_shodow">
                <div className="img">{/*<img src={contact1} alt="" />*/}</div>
                <div className="details">
                  <h1>Salim Daroueche</h1>
                  <p>DevOps Engineer</p>
                  <p>
                    I am intership in Adlere. 
                  </p>
                  <p>Connect with me via and call in to my account.</p>{" "}
                  <br />
                  <p>Phone: +33659232904</p>
                  <p>Email: salim.drch@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
            
                    <button className="btn_shadow">
                      <a href="https://www.linkedin.com/in/salimdaroueche/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>

                    </button>
                    
                    <button className="btn_shadow">
                      <a href="https://github.com/salimdrch">
                        <i class="fab fa-github"></i>
                      </a>
                    </button>

                    <button className="btn_shadow">
                      <a href="mailto:salim.drch@gmail.com">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
