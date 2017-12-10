import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../actionCreators';
import { isAuthenticated } from '../selectors';


const UNAUTHENTICATED_LINKS = {
  'Log In': '/login/',
  Register: '/register/',
};


const AppNav = ({ isAuthenticated, onLogOut }) => {
  let links;
  if (isAuthenticated) {
    links = <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} onClick={onLogOut}>Log Out</MenuItem>

      </NavDropdown>;
    //dropdown
    

  } else {
    links = Object.keys(UNAUTHENTICATED_LINKS).map(key => (
      <LinkContainer key={key} to={UNAUTHENTICATED_LINKS[key]}>
        <NavItem>{key}</NavItem>
      </LinkContainer>
    ));
  }

  return (
    <Navbar key="navbar" inverse collapseOnSelect staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">UltiManager</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {links}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

AppNav.defaultProps = {
  isAuthenticated: false,
};

AppNav.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogOut: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});


const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
