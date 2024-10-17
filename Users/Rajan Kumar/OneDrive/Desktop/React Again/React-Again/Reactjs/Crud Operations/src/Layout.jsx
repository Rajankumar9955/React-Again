import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link,Outlet } from 'react-router-dom';
const Layout=()=>{
    return(
        <>
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="searchbyname">SearchByName</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
           <Outlet/>
      </div>
      </div>
        </>
    )
}
export default Layout;