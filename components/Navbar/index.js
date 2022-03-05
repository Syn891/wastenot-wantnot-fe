import React from "react";
import { Navbar, Container, Offcanvas, Nav, Button} from 'react-bootstrap'
import styles from './navbar.module.css'
import { useUser } from '@auth0/nextjs-auth0';

function NavbarCustom({ title, color, children, Icon }) {
  const { user } = useUser();

  function renderLogout() {
  if(user) {
      return  <a href = "/api/auth/logout"><Button className={styles.logout}>Logout</Button></a>

    }
  }

  return (
    <Navbar expand={false} className={styles.navbar}>
      <Container fluid className={styles.container}>
        {children}
        <div className={styles.divc} style={{ backgroundColor: color }}>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand className={styles.title} href="#">
            {title}
          </Navbar.Brand>
          {/* <Icon size={'2em'} /> */}
        </div>
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className={styles.offcanvasLanding}
            >
        <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
        <Offcanvas.Title id="offcanvasNavbarLabel">WasteNot: WantNot</Offcanvas.Title>
        <img className={styles.brand} src="https://i.ibb.co/MV46RZx/Recycle-icon-by-rudezstudio-2-580x386-copy.png"/>
        </Offcanvas.Header>
      <Offcanvas.Body className={styles.offcanvasBody}>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className={styles.navLink} href="/about">About Us</Nav.Link>
          <Nav.Link className={styles.navLink} href="/shoppinglist">Grocery List</Nav.Link>
          <Nav.Link className={styles.navLink} href="/pantry">In My Pantry</Nav.Link>
          <Nav.Link className={styles.navLink} href="/mealPlan">Meal Planner</Nav.Link>
          <Nav.Link className={styles.navLink} href="/donations">My Donations</Nav.Link>
          <Nav.Link className={styles.navLink} href="/donationPoints">Find Food Banks!</Nav.Link>
          <Nav.Link className={styles.navLink} href="/profile">Account</Nav.Link>
          {
            renderLogout()
          }
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>        
  )

}

export default NavbarCustom;
