import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container, Carousel, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './navbar.css';

import img1 from "../assets/carosal1.jpg"
import img2 from "../assets/carosal2.jpg"
import img3 from "../assets/carosal3.jpg"
import img4 from "../assets/carosal4.jpg"
import logo from '../assets/logo-light.png';
import { FaSearch } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
const NavbarCarousel = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const navbarCollapseRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const handleNavItemClick = () => {
    if (navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/' || location.pathname === '/body';
  const navbarClass = isHomePage ? `navbar-custom ${sticky ? 'black-nav' : ''}` : 'navbar-custom black-nav';
 
  return (
    <>
      <Navbar bg="transparent" expand="lg" fixed="top" className={navbarClass}>
        <Container fluid>
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <img className='img-fluid logo' src={logo} alt="Logo"  />
          </Navbar.Brand>
          <Navbar.Toggle >
            <div className='toggle-icon'><GiHamburgerMenu /></div>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" ref={navbarCollapseRef} className="custom-navbar-collapse">
            <Nav className="ml-auto">
            
              <Nav.Link href="/Body" className={`ms-3 nav-hover fw-bolder mt-1 ${sticky ? 'dark-text' : 'text-light'}`}>Home</Nav.Link>
              <NavDropdown title="Service" id="basic-nav-dropdown" className={`dropdown-hover ms-3 mt-1 fw-bold nav-hover1 ${sticky ? 'dark-text' : 'text-light'}`}>
                <div className="row mt-3 mx-auto drop" >
                  <div className="col-sm-6">
                    <HashLink to="/body#cctv" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#cctv" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        CCTV
                      </NavDropdown.Item>
                    </HashLink>
                    <HashLink to="/body#acs" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#acs" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        ACCESS CONTROL SYSTEM
                      </NavDropdown.Item>
                    </HashLink>
                    <HashLink to="/body#asc" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#asc" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        AUTOMATIC SLIDING/GLASS DOORS AND REVOLVING DOORS
                      </NavDropdown.Item>
                    </HashLink>
                    <HashLink to="/body#ars" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#ars" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        AUTOMATIC ROLLING SHUTTERS AND GARAGE DOORS
                      </NavDropdown.Item>
                    </HashLink>
                  </div>
                  <div className='col-sm-6'>
                    <HashLink to="/body#ia" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#ia" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        INTRUDER ALARM
                      </NavDropdown.Item>
                    </HashLink>
                    <HashLink to="/body#foj" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#foj" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        FIT OUT JOB
                      </NavDropdown.Item>
                    </HashLink>
                    <HashLink to="/body#aga" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#aga" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        AUTOMATIC GATES AND AUDIO VIDEO INTERCOMS
                      </NavDropdown.Item>
                    </HashLink>
                    <HashLink to="/body#amc" className='text-decoration-none'>
                      <NavDropdown.Item href="/body#amc" className="dropdown-item-custom mt-2" onClick={handleNavItemClick}>
                        AMC
                      </NavDropdown.Item>
                    </HashLink>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link href="/About" className={`ms-3 fw-bolder mt-1 nav-hover ${sticky ? 'dark-text' : 'text-light'}`}>About Us</Nav.Link>
              <Nav.Link href="/Contact" className={`ms-3 fw-bolder mt-1 nav-hover ${sticky ? 'dark-text' : 'text-light'}`}>Contact Us</Nav.Link>
              <Nav.Link onClick={handleSearchClick} className={`ms-3 fw-bolder fs-5 mt-1 cursor-pointer ${sticky ? 'dark-text' : 'text-light'}`}><FaSearch /></Nav.Link>
              <button className={`px-4 ms-2 mb-1 flash-effect2 fw-bold ${sticky ? 'dark-text' : 'text-light'}`} style={{border:"0px"}}>
                Get A Quote
              </button>
              <button className="expand-button ms-4 mt-2"><IoCall /></button>
              <Nav.Link href="#link" className={`ms-3 fw-bold ${sticky ? 'dark-text' : 'text-light'}`}>
                <div>+971 55 538 8440 <br />
                  <a href="mailto:sales@liwaratech.com" className={`${sticky ? 'dark-text' : 'text-light'}`} style={{ textDecoration: "none", color: sticky ? 'black' : 'white' }}>sales@liwaratech.com</a>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isHomePage && (
        <Carousel fade interval={10000}> {/* 10 seconds interval with fade effect */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption style={{ position: 'absolute', top: '30%', textShadow: '2px 2px 4px black' }}>
              <h5 className='text-start fw-bold texton'>LIWERA TECHNICAL SERVICES LLC</h5>
              <h1 className='text-start fw-bolder captionheading'>CCTV</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption style={{ position: 'absolute', top: '30%', textShadow: '2px 2px 4px black' }}>
              <h5 className='text-start fw-bold texton'>LIWERA TECHNICAL SERVICES LLC</h5>
              <h1 className='text-start fw-bolder captionheading'>Automatic Sliding Doors/Glass Doors</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption style={{ position: 'absolute', top: '30%', textShadow: '2px 2px 4px black' }}>
              <h5 className='text-start fw-bold texton'>LIWERA TECHNICAL SERVICES LLC</h5>
              <h1 className='text-start fw-bolder captionheading'>FIT OUT JOB</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Fourth slide"
            />
            <Carousel.Caption style={{ position: 'absolute', top: '30%', textShadow: '2px 2px 4px black' }}>
              <h5 className='text-start fw-bold texton'>LIWERA TECHNICAL SERVICES LLC</h5>
              <h1 className='text-start fw-bolder captionheading'>INTRUDER ALARM</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}

      {showSearch && (
        <div className="search-overlay">
          <button className="close-button fs-1" onClick={handleCloseSearch}><FaWindowClose /></button>
          <input type="text" className="search-input bg-dark text-light" placeholder="Type to search..." />
        </div>
      )}
    </>
  );
};

export default NavbarCarousel;
