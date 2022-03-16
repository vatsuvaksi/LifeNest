import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus, faSignInAlt, faSignOutAlt, faGrinAlt} from '@fortawesome/free-solid-svg-icons';
import Login from "../components/Login";

class NavigationBar extends Component {

    logout(){
        return this.props.history.push('/');
    }
    render() {
        const guestLinks = (
            <>
                <div className="mr-auto"></div>
                <Nav className="navbar-centre">
                    <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Register</Link>
                    <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faSignInAlt} /> Login</Link>
                    <Link to={"chatbot"} className="nav-link"><FontAwesomeIcon icon={faGrinAlt} /> ChatBot</Link>
                </Nav>
            </>
        );
        const logger = ( 
            <>
              <Nav className="navbar-right">
                    <Link to={"logout"} className="nav-link" onClick={this.logout.bind(this)}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                </Nav>
            </>
        );

        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MO0h_8-qkoz703dExCQfBZAitjfMUmYAOg&usqp=CAU" height="45px" width="45px" />
                    Lifenest
                </Link>
                { Login.log ==='true' ? logger : guestLinks}
            </Navbar>
        );
    };
};



export default NavigationBar;