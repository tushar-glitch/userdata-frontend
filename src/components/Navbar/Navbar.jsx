import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
function Navbar1() {
  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}><Navbar.Brand href="#home">BVUR</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link to='/all' style={{ color: 'inherit', textDecoration: 'inherit'}}><Nav.Link href="#home">ALL</Nav.Link></Link>
            <Link to='/update' style={{ color: 'inherit', textDecoration: 'inherit' }}><Nav.Link href="#features">UPDATE</Nav.Link></Link>
            <Link to='/delete' style={{ color: 'inherit', textDecoration: 'inherit' }}><Nav.Link href="#pricing">DELETE</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;