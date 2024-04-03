"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import cafe from "../asserts/cafe2.png";
import AppBarStyle from "../compoents/AppBar.module.css";

const Appbar = () => {
  const [navbarColor, setNavbarColor] = useState("transperent");
  const [textColor, setTextColor] = useState("#500f17"); // State for text color

  useEffect(() => {
    const changeNavbarColor = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setNavbarColor("transperent"); // Change to white color when scrolled
        setTextColor("#500f17");
      } else {
        setNavbarColor("transperent"); // Revert to transparent when at the top
        setTextColor("#500f17");
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <div>
      <Navbar
        className={AppBarStyle.navbarCustom}
        style={{
          backgroundColor: navbarColor,
          color: textColor,
          width: "100%",
        }}
        variant="light"
        expand="lg"
      >
        <Container fluid className={AppBarStyle.myCustomContainer}>
          <Image src={cafe} alt="Logo" className={AppBarStyle.appbarlogo} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end align-items-center flex-grow-1 pe-3 mt-2 navbar-nav navbar-nav-scroll"
              navbarScroll
            >
              {/* <Nav.Link
                href="/"
                className={AppBarStyle.navlinksdesign}
                style={{ color: textColor }}
              >
                Home
              </Nav.Link> */}

              {/* <Nav.Link href="/contact" className="nav-links-design">
          Services
          </Nav.Link> */}

              {/* <Nav.Link
                style={{ color: textColor }}
                href="/menu"
                className={AppBarStyle.navlinksdesign}
              >
                Menu
              </Nav.Link>

              <Nav.Link
                href="/About"
                className={AppBarStyle.navlinksdesign}
                style={{ color: textColor }}
              >
                About
              </Nav.Link> */}

              <Nav.Link
                // href="/Khardungla Special"
                className={AppBarStyle.navlinksdesignbutton}
                style={{ color: textColor }}
              >
                Khardungla Special
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
<<<<<<< HEAD




=======
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
