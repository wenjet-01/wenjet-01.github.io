import React from "react";

//import stock
import utc1 from "../img/1utc1.png";
import utc2 from "../img/1utc2.png";
import utc3 from "../img/1utc3.png";
import utc4 from "../img/1utc4.png";
import cp1 from "../img/centrepoint1.png";
import cp2 from "../img/centrepoint2.png";
import cp3 from "../img/centrepoint3.png";
import cp4 from "../img/centrepoint4.png";
import cp5 from "../img/centrepoint5.png";
import crms1 from "../img/crms1.png";
import crms2 from "../img/crms2.png";
import crms3 from "../img/crms3.png";
import crms4 from "../img/crms4.png";
import crms5 from "../img/crms5.png";
import elms1 from "../img/elms1.png";
import elms2 from "../img/elms2.png";
import elms3 from "../img/elms3.png";
import gatherdeal1 from "../img/gatherdeal1.png";
import gatherdeal2 from "../img/gatherdeal2.png";
import gatherdeal3 from "../img/gatherdeal3.png";
import oneshop1 from "../img/oneshop1.png";
import oneshop2 from "../img/oneshop2.png";
import oneshop3 from "../img/oneshop3.png";
import pcms1 from "../img/pcms1.png";
import pcms2 from "../img/pcms2.png";
import pcms3 from "../img/pcms3.png";
import superone1 from "../img/superone1.png";
import superone2 from "../img/superone2.png";
import treetop1 from "../img/treetop1.png";
import treetop2 from "../img/treetop2.png";
import treetop3 from "../img/treetop3.png";
import treetop4 from "../img/treetop4.png";
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: "CentrePoint Mall Website",
          desc: "NuxtJs NextJs Laravel Docker Mysql Traefik",
          thumbnail: cp1,
          images: [ cp2, cp3, cp4, cp5],
        },
        {
          name: "OneShop",
          desc: "E-commerse site",
          thumbnail: oneshop1,
          images: [ oneshop2, oneshop3],
        },
        {
          name: "TreeTop Adventures Website",
          desc: "Information & booking site for Treetop at 1Utama",
          thumbnail: treetop1,
          images: [ treetop2, treetop3, treetop4],
        },
        {
          name: "Tenant Convention",
          desc: "Convention invitation & management site",
          thumbnail: utc1,
          images: [ utc2, utc3, utc4],
        },
        {
          name: "Change Request Management System",
          desc: "Digital change request process management system",
          thumbnail: crms1,
          images: [ crms2, crms3, crms4, crms5],
        },
        {
          name: "Phishing Campaign Management System",
          desc: "Phishing system for internal use",
          thumbnail: pcms1,
          images: [ pcms2, pcms3],
        },
        {
          name: "E-learning System",
          desc: "E-learning management system for internal use",
          thumbnail: elms1,
          images: [ elms2, elms3],
        },
        {
          name: "Gatherdeal",
          desc: "Loyalty program webapp",
          thumbnail: gatherdeal1,
          images: [ gatherdeal2, gatherdeal3],
        },
      ],
    };
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Previous Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">

          {this.state.projects.map(project => {
            return (
              <React.Fragment key={project.name}>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={project.thumbnail} data-lightbox={project.name}>
                      <div className="work-img">
                        <img src={project.thumbnail} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{project.name}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">
                                {project.desc}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {project.images.map(image => {
                        return (
                          <React.Fragment>
                            <a
                              href={image}
                              data-lightbox={project.name}
                              style={{ display: "none" }}
                            >
                              jsx-a11y/anchor-has-content warning
                            </a>
                          </React.Fragment>
                        );
                      })}
                  
                  </div>
                </div>
              </React.Fragment>
            );
          })}

                    
            {/*  */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
