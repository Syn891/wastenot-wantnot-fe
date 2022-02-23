import Head from 'next/head'
import Image from 'next/image'
import { Row, Navbar, Container, Offcanvas, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WasteNot: -WantNot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Righteous&display=swap" rel="stylesheet" /> */}
      </Head>

      <main className={styles.main}>
      <Navbar bg="light" expand={false}>
        <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand href="#">WasteNot: WantNot</Navbar.Brand>
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">WasteNot: WantNot</Offcanvas.Title>
        </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">About Us</Nav.Link>
          <Nav.Link href="#action2">Food waste matters!</Nav.Link>
          <Nav.Link href="#action2">Manage, Reduce, Donate!</Nav.Link>
          <Nav.Link href="/donations">Find Food Banks!</Nav.Link>
          <Nav.Link className={styles.bottom} href="/">Register</Nav.Link>

         
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>        

<Row className={styles.row}></Row>
        <Row className={styles.row}></Row>
        <Row className={styles.row}></Row>
      </main>

    </div>
  )
}
