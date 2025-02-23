import React from "react";

//import stock
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
          name: "Laravel",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
        },
        {
          name: "Laravel1",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
        },
        {
          name: "Laravel2",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
        },
        {
          name: "Laravel3",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
        },
        {
          name: "Laravel4",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
        },
        {
          name: "Laravel5",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
        },
        {
          name: "Laravel6",
          desc: "2 Years",
          thumbnail: stock,
          images: [ stock1, stock2, stock3, stock4, stock5],
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
