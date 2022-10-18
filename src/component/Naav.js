import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { BsFillBasket2Fill } from "react-icons/bs";
import { useNavigate} from 'react-router-dom';

function Naav(props) {
 
    const navigate =useNavigate();
  
  let data=props.theproducts.filter((f)=>f.count>0)
 
  return (
    <Navbar bg="danger" expand="lg" className='bg-opacity-25 border border-1 border-danger fs-5 fw-bold' >
      <Container>
        <Navbar.Brand href="#home" className='fs-3'>Lusion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/shop")}}>Shop</Nav.Link>
  
      <div className='ms-2'>
     <Button className='position-relative bg-transparent p-1 border-dark' onClick={()=>{navigate("/shoppingCard")}}>
     <BsFillBasket2Fill className='fs-4 text-dark'/>
      <Badge bg={data.length>0?'success':'danger'} className="position-absolute top-0 start-75">{data.length}</Badge>
      </Button> 
      </div>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naav;









// import React from 'react';
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavLink,
//   NavItem,
//   Badge,
//   Button,
// } from 'reactstrap';

// import { BsFillBasket2Fill } from "react-icons/bs";
// import { useNavigate} from 'react-router-dom';

// function Naav(props) {


//   const navigate =useNavigate();
  
//   let data=props.theproducts.filter((f)=>f.count>0)
//   return (
//     <div>
//         <Navbar color="danger" className='bg-opacity-25 border border-1 border-danger' light container> 
//       <Nav className='link fs-4'>
//   <NavItem>
//     <NavLink onClick={()=>{navigate("/")}}>
//       Home
//     </NavLink>
//   </NavItem>
//   <NavItem>
//     <NavLink onClick={()=>{navigate("/shop")}}>
//       Shop
//     </NavLink>
//   </NavItem>
// </Nav>
// <NavbarBrand href="/" className='fs-3'>
//       Lusion
//     </NavbarBrand>
//     <div className='me-5'>
//     <Button className='position-relative bg-transparent' onClick={()=>{navigate("/shoppingCard")}}>
//     <BsFillBasket2Fill className='fs-4 text-primary'/>
//      <Badge color={data.length>0?'success':'danger'} className="position-absolute top-0 start-75">{data.length}</Badge>
//      </Button> 
//      </div>
     

//   </Navbar>
//     </div>
//   );
// }

// export default Naav;