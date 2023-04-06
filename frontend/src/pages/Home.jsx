import React from 'react';
import '../styles/home.css'
import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/world.png'

import SearchBar from '../shared/SearchBar';

const Home = () => {
  return <>
  
  {/* ========== hero section start ========== */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlight"> memories </span></h1>
            <p>
             khúc này gõ tiếng anh ko à lười quá (dô home.jsx sửa nha). 
            </p>
          </div>
        </Col>
        <col lg='2'>
          <div className="hero__img-box">
            <img src ={heroImg} alt=""/> 
          </div>
        </col>
        <col lg='2'>
          <div className="hero__img-box mt-4">
            <video src ={heroVideo} alt="" controls />
          </div>
        </col>
        <col lg='2'>
          <div className="hero__img-box mt-5"> 
            <img src ={heroImg02} alt=""/>
          </div>
        </col>
      <SearchBar />
      </Row>
    </Container>
  </section>
    {/* ========== hero section start ========== */}
    <section>
      <Container>
        <row>
          <col lg='3'>
            <h5 className="services__subtitle"> what we service</h5>
            <h2 className="services__title">we offer out best services</h2>
          </col>
        </row>
      </Container>
    </section>
  </>
};

export default Home;