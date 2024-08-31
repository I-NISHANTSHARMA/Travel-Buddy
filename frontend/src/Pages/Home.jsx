import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testinomials from "../components/Testinomial/Testinomials";
import ServiceList from "../services/ServiceList";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
  <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know before You Go"} />
                <img src={worldImg} alt="world image" />
              </div>
              <h1>
                Traveling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
              <p>            
Traveling can be an exciting and enriching experience that allows you to explore new places, cultures, and create lasting memories. Whether you're planning a vacation, a business trip, or a solo adventure,Embrace the adventure and create unforgettable memories along the way.
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImg} alt="heroimage" />
            </div>
          </Col>

          <Col lg="2">
            <div className="hero__img-box">
              <video src={heroVideo} alt="heroVideo" controls />
            </div>
          </Col>

          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="heroimage02" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle">What WE Serve</h5>
            <h2 className="services__title">We offers our best services</h2>
          </Col>

          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* Featured tour section start */}

    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our Featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    {/* 
     Experience section start */}

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"} />
              <h2>
                With our all experience <br /> we will serve you
              </h2>
              <p>
                {" "}
                We serves as a catalyst for personal growth, cultural understanding, and unforgettable experiences. 
                <br />
                It has the power to broaden your perspectives, ignite your curiosity, and enrich your life in countless ways.
              </p>
            </div>

            <div className="counter__wrapper  d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6> Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years Experirnce</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="experience image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

                 {/* Gallery section start */}
         <section>
          <Container>
            <Row>
              <Col lg="12">
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customer tour gallery</h2>

              </Col>
              <Col lg='12'>
            <MasonryImagesGallery/>

              </Col>
            </Row>
          </Container>
         </section>


                  {/* Testinomial section start */}

                 <section>
                  <Container>
                    <Row>
                      <Col lg="12">
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className="testinomial__title">What our fans say about us</h2>
                      </Col>
                      <Col lg="12">
                        <Testinomials/>
                      </Col>
                    </Row>
                  </Container>
                 </section> 
             

             <Newsletter/>


  </>
);
    };
export default Home;
