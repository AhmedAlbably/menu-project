import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";


function NavScrollExample({filterBySearch}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="">

        <Navbar.Brand href="#">المطعم</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          
          <Form className="d-flex m-3 ">
            <Form.Control
              type="text"
              placeholder="ابحث عن ما تريد"
              className="me-2 "
              aria-label="Search"
              onChange={(e) => filterBySearch(e.target.value)}
              
            />
          </Form>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
