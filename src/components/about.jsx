import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Laravel",
          content: "Laravel",
          duration: "2 Years",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "NextJs / ReactJs",
          content: "NextJs / ReactJs",
          duration: "2 Years",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "NuxtJs / VueJs",
          content: "NuxtJs / VueJs",
          duration: "1.5 Years",
          porcentage: "70%",
          value: "70",
        },
        {
          id: "MYSQL",
          content: "MYSQL",
          duration: "2.5 Years",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "Docker",
          content: "Docker",
          duration: "2 Years",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "NodeJs",
          content: "NodeJs",
          duration: "0.5 Years",
          porcentage: "60%",
          value: "60",
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Full-Stack Developer and Software Engineer with 2+ years of experience building scalable web applicationsand robust backend systems. Proficient in modern frameworks like Nuxt.js, Next.js, React.js, Vue.js, and Laravel, as well as Node.js and MySQL for database management. Experienced in deploying cloud-based solutions using AWS and Huawei Cloud. Passionate about delivering high-quality, performance-driven software solutions across industries.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.duration}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id} style={{ textAlign:"justify"}}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
