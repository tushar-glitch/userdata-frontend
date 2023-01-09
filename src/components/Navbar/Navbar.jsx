import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BVUR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ALL</Nav.Link>
            <Nav.Link href="#features">UPDATE</Nav.Link>
            <Nav.Link href="#pricing">DELETE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default Navbar1;