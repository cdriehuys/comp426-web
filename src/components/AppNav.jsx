import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../actionCreators';
import { getCurrentUser } from '../selectors';


const UNAUTHENTICATED_LINKS = {
  'Log In': '/login/',
  Register: '/register/',
};


const AppNav = ({ currentUser, onLogOut }) => {
  let links;
  if (currentUser !== null) {
    links = (
      <NavDropdown eventKey={3} title={currentUser.username} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} onClick={onLogOut}>Log Out</MenuItem>
      </NavDropdown>
    )
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
  currentUser: null,
};

AppNav.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
  onLogOut: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
});


const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
