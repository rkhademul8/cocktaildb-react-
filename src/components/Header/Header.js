import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';



const Header = () => {
   
  // const {user,logOut}=useFirebase()
  const {user,logOut}=useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">CockTail</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
      <Nav.Link as={Link}  to="/home" >Home</Nav.Link>
      <Nav.Link as={Link}  to="/about">About</Nav.Link>
    </Nav>

    <Nav>
      <Nav.Link href="/signUp">Sign Up</Nav.Link>
      {
        user?.email?<span style={{color:'white', padding:'10px'}}>Hello,{user.displayName}</span>: ''
      }
      {
        !user?.email?
        <Nav.Link as={Link}  to="/login">Login</Nav.Link> :
        <Button  onClick={logOut} variant="light"> Log out</Button> 
        
      }
        
      
          
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
           
        </div>
    );
};

export default Header;