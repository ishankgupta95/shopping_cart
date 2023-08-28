import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavBarComponent() {
  const cartProducts = useSelector(state => state.cart)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>
            <Nav.Link to='/' as={Link}>Products</Nav.Link>
        <Navbar.Toggle />

        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
