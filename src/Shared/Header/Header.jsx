import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const handleMouseEnter = () => {
        const name = user.email;
        setShowTooltip(name);
    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Nazmul kitchen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div><Link to='/' className='text-decoration-none me-4'>Home</Link></div>
                            <div><Link to='/blog' className='text-decoration-none'>Blog</Link></div>
                        </Nav>
                        <Nav>
                            {user && (
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="username-tooltip">{user.name}</Tooltip>}
                                    show={showTooltip}
                                >
                                    <div
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <FaUserCircle style={{ fontSize: '2rem' }} />
                                    </div>
                                </OverlayTrigger>
                            )}
                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;






















































// import React, { useContext } from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Header = () => {

//     const { user, logOut } = useContext(AuthContext);

//     const handleLogOut = () => {
//         logOut()
//             .then()
//             .catch(error => console.log(error));
//     }


//     return (
//         <div>
//             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//                 <Container>
//                     <Navbar.Brand href="#home">Nazmul kitchen</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="mx-auto">
//                             <div><Link to='/' className='text-decoration-none me-4'>Home</Link></div>
//                             <div><Link to='/blog' className='text-decoration-none'>Blog</Link></div>
//                         </Nav>

//                         <Nav>
//                             {
//                                 user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
//                             }

//                             {user ?
//                                 <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
//                                 <Link to="/login">
//                                     <Button variant="secondary">Login</Button>
//                                 </Link>
//                             }
//                         </Nav>



//                         {/* <Nav>
//                             <div>
//                                 <Link href="#deets">Profile</Link>

//                             </div>
                            
//                             <div> <Link to ='/login'><Button variant="outline-dark" className='ms-2'>Login</Button></Link></div>
//                             <div> <Link to='/signUp'><Button variant="outline-dark" className='ms-2'>Sign up</Button></Link></div>
                      
//                         </Nav> */}
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// };

// export default Header;

