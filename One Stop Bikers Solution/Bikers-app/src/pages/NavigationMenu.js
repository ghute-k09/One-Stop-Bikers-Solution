import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavigationMenu() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={"/home"}><span className="fs-1" style={{color:"white"}}>Bike</span><span className="fs-1">&#127949;</span><span className="fs-1" style={{color:"#0099ff"}}>Solutions</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/home"}style={{color:"white"}}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"/collection"}style={{color:"white"}}>
                Collection
              </Nav.Link>

              <Nav.Link as={Link} to={"/registration"}style={{color:"white"}}>
                Registration
              </Nav.Link>
               
              <Nav.Link as={Link} to={"/contactus"}style={{color:"white"}}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to={"/ourteam"}style={{color:"white"}}>
                Our Team
              </Nav.Link>

             <Nav.Link as={Link} to={"/userlist"}style={{color:"orange"}}>
                Users List
              </Nav.Link> 

              {/* <Nav.Link as={Link} to={"/querylist"}style={{color:"orange"}}> 
                Query List
            </Nav.Link>*/}

              {/* <Nav.Link as={Link} to={"/Bookedcarlist"}style={{color:"orange"}}>
                Booked products
              </Nav.Link> */}

              
             
              <Nav.Link onClick={logOutAction}style={{color:"red"}}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationMenu;