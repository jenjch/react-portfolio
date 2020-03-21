import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Row from "./components/Row";

function App() {
  return (
    <Router>
      <Container fluid={true}>
        <Container>
          <Row>
            <h1 class="rounded col-sm-12 col-lg-3">Jen Chen</h1>
            <Navbar/>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
          </Row>
          <Footer />
        </Container>
      </Container>
    </Router>
  );
}

export default App;
