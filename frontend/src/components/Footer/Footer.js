import React from 'react';
import './footer.css';

import { Container, Row, Col , ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import  logo  from "../../assets/images/logo.png";

const quick__links=[
  {
    path: '/home',
    display:'Home',
  },
  {
    path: '/about ',
    display:'About',
  },
  {
    path: '/tours',
    display:'Tours',
  },
];
const quick__links2=[
  {
    path: '/gallery',
    display:'Gallery',
  },
  {
    path: '/login',
    display:'Login',
  },
  {
    path: '/register',
    display:'Register',
  },
];
const Footer = () => {

  const year = new Date().getFullYear();

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>Traveling the world is a dream for many people, and it offers an incredible opportunity to explore diverse cultures, breathtaking landscapes, and iconic landmarks.</p>

          <div className="social__links d-flex align-items-center gap-4">
            <span>
             
              <Link to="https://www.twitter.com/"><i class="ri-twitter-fill"></i></Link>
            </span>
            <span>
              <Link to="https://www.instagram.com/"><i class="ri-instagram-fill"></i></Link>
            </span>
            <span>
              <Link to='https://www.facebook.com'><i class="ri-facebook-circle-fill"></i></Link>
            </span>
            <span>
              <Link to='https://in.linkedin.com/'><i class="ri-linkedin-fill"></i></Link>
            </span>
            {/* <span>
              <Link to='#'><i class="ri-twitter-fill"></i></Link>
            </span> */}
          </div>
        </div>

        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Discovery</h5>
          <ListGroup className="footer__quick-links">
            {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {
              quick__links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title">Contact</h5>
          <ListGroup className="footer__quick-links">
            
              
                 
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-fill"></i></span>
                    Address:
                  </h6>
                  <p className="mb-0">Saharanpur , INDIA</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-fill"></i></span>
                    Email:
                  </h6>
                  <p className="mb-0">rahul1112sh@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className="mb-0">7217418163</p>
                </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='12' className='text-center pt-5'>
          <p className="copyright">Copyright{year}, design and develop by Rahul Sharma.All rights are reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer