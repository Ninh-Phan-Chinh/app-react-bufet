import React, { Component } from 'react';
import './HeaderPc.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import Headroom from 'react-headroom';
import {FaAngleDown} from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <header className="header">
            <Headroom>
            <Navbar expand="lg" className="container">
                <Navbar.Brand href="#home">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="list-button-header">
                    <Nav className="">
                     {/* btn Home pc */}
                         <Nav.Link href="#home" className="btn-home">
                           <span>Home <i><FaAngleDown/></i></span>
                            <ul class="menu-btn-home">
                                        <li class="dropdown-item"><a href="archive-tech.html">Home one</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech.html">Home two</a></li>
                                        <li class="dropdown-item"><a href="single-post-tech.html">Home three</a></li>
                                        <li class="dropdown-item"><a href="archive-tech-needs.html">Home four</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech-needs.html">Home five</a>
                                        </li>
                                    </ul>
                         </Nav.Link>

                        <Nav.Link href="#whyBufet">About</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#screenShots">ScreenShots</Nav.Link>
                        <Nav.Link href="#slectPlan">Pricing</Nav.Link>
                         {/* btn blog pc */}
                        <Nav.Link href="#blog" className="btn-home">
                           <span>Blog <i><FaAngleDown/></i></span>
                            <ul class="menu-btn-home">
                                        <li class="dropdown-item"><a href="archive-tech.html">Home one</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech.html">Home two</a></li>
                                        <li class="dropdown-item"><a href="single-post-tech.html">Home three</a></li>
                                        <li class="dropdown-item"><a href="archive-tech-needs.html">Home four</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech-needs.html">Home five</a>
                                        </li>
                                    </ul>
                         </Nav.Link>
                            {/* btn pages pc */}
                        <Nav.Link href="#" className="btn-home">
                           <span>Pages <i><FaAngleDown/></i></span>
                            <ul class="menu-btn-home">
                                        <li class="dropdown-item"><a href="archive-tech.html">Home one</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech.html">Home two</a></li>
                                        <li class="dropdown-item"><a href="single-post-tech.html">Home three</a></li>
                                        <li class="dropdown-item"><a href="archive-tech-needs.html">Home four</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech-needs.html">Home five</a>
                                        </li>
                                    </ul>
                         </Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Headroom>
             </header>
        );
    }
}

export default Header;