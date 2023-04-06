

import React from "react";
import './Newsletter.css'
import { Container, Row, Col } from "reactstrap";
import maletourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
    <section className="newsleteer">
        <Container>
            <Row>
                <Col lg ='6'>
                    <div className="newsletter__content">
                        <h2> Subscribe now to get useful traveling information.</h2>
                        <div className="newsletter__content">
                            <input type ='email' placeholder="Enter your email"/>
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati adipisci sunt in, provident facere ipsam.
                        </p>
                    </div>
                </Col>
                <Col lang="6">
                    <div className="newsletter__img">
                        <img src={maletourist} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)}
export default Newsletter