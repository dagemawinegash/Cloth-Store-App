import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const NavbarPanel = () => {
  const cardItems = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav>
          <Nav.Link as={Link} to="/">Products</Nav.Link>
        </Nav> 
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link as={Link} to="cart">Cart {cardItems.length} </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>       
      </Container>
    </Navbar>
  )
}

export default NavbarPanel