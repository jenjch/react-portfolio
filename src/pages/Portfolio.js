import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Portfolio() {
return (
 
<Container>
    <section className="content">
        <Row>
            <div class="col-md-12 midsection">
                <h2>Portfolio</h2>
                <Row>
                    <Col size="md-4 sm-12">
                        <div className="button-container">
                            <img className="img-fluid portfolio-pic" src="../components/assets/images/pw-generator.png" alt="Password Generator"/>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onclick={window.open("https://jenjch.github.io/passwordGenerator/")}>Password Generator</button>
                        </div>
                    </Col>
                    <Col size="md-4 sm-12">
                        <div className="button-container">
                            <img className="img-fluid portfolio-pic" src="../components/assets/images/weather-app.PNG" alt="Weather Dashboard"/>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onclick={window.open("https://jenjch.github.io/WeatherDashboard/")}>Weather Dashboard</button>
                        </div>
                    </Col>
                    <Col size="md-4 sm-12">
                        <div className="button-container">
                            <img className="img-fluid portfolio-pic" src="../components/assets/images/movie-app.PNG" alt="Movies & Groovies"/>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onclick={window.open("https://jenjch.github.io/GroupProject1/")}>Movies App</button>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col size="md-4 sm-12">
                        <div className="button-container">
                            <img className="img-fluid portfolio-pic" src="../components/assets/images/note-taker2.PNG" alt="Note Taker"/>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onclick={window.open("https://notetaker-5123534.herokuapp.com/")}>Note Taker</button>
                        </div>
                    </Col>
                    <Col size="md-4 sm-12">
                        <div className="button-container">
                            <img className="img-fluid portfolio-pic" src="../components/assets/images/banhMi2.jpg" alt="Banh Mi Log"/>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onclick={window.open("https://blooming-wildwood-86554.herokuapp.com/")}>Banh Mi Log</button>
                        </div>
                    </Col>
                    <Col size="md-4 sm-12">
                        <div className="button-container">
                            <img className="img-fluid portfolio-pic" src="../components/assets/images/podcast-app.jpg" alt="Podcast Collection"/>
                            <button type="button" className="btn btn-primary btn-lg btn-block" onclick={window.open("https://project2-020420.herokuapp.com/")}>Podcast Collection</button>
                        </div>
                    </Col>
                </Row>

            </div>
        </Row>
    </section>
</Container>

);
};

export default Portfolio;
