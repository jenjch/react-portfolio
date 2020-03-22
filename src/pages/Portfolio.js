import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";
// import testimage from "thetestpath"

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Password Generator"
                imgPath={require("../components/assets/images/pw-generator.png")}
                linkURL="https://jenjch.github.io/passwordGenerator/"
              />
              <Project
                name="Weather Dashboard"
                imgPath={require("../components/assets/images/weather-app.PNG")}
                linkURL="https://jenjch.github.io/WeatherDashboard/"
              />
              <Project
                name="Movies & Groovies"
                imgPath={require("../components/assets/images/movie-app.PNG")}
                linkURL="https://jenjch.github.io/GroupProject1/"
              />
            </Row>
            <Row>
              <Project
                name="Note Taker"
                imgPath={require("../components/assets/images/note-taker2.PNG")}
                linkURL="https://notetaker-5123534.herokuapp.com/"
              />
              <Project
                name="Banh Mi Log"
                imgPath={require("../components/assets/images/banhMi2.jpg")}
                linkURL="https://blooming-wildwood-86554.herokuapp.com/"
              />
              <Project
                name="Podcast Collection"
                imgPath={require("../components/assets/images/podcast-app.jpeg")}
                linkURL="https://project2-020420.herokuapp.com/"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
