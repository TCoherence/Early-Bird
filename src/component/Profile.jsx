import React, {Component} from 'react';
import { Col, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AvatarImage from "../images/avatar.jpeg"
import './Profile.css'

const Avatar = (props) => {
  return (
      <div>
        <Card body>
            <CardImg  src = {AvatarImage} alt="Your avatar image" />
            <CardTitle>Eric</CardTitle>
            <CardText>TCoherence</CardText>
            <Button href = "#">Edit Profile</Button>
        </Card>  
        <Card body>
            {/* <CardSubtitle>Special Title Treatment</CardSubtitle> */}
            <CardText>Now @Evanston</CardText>
            {/* <Button>Go somewhere</Button> */}
        </Card>     
        <Card body>
            <CardTitle>Groups Your In</CardTitle>
            <CardText>XXX, XXX, XXX</CardText>
            <Button href = "#">Select more</Button>
        </Card>      
      </div>
  );
};


const ProfileDetail = (props) => {
    return (
        <div>
            <NavBar />
        </div>
    )
}


class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: true
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
          <Col >
            <Navbar color="light" light expand = "md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={!this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/TCoherence">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
          </Col>

      );
    }
  }


class Profile extends Component {

    render(){
        return (
        <div className = "flex-container">
            <div className = "left" >
                <Avatar />
            </div>
            <div className = "main">
                <ProfileDetail  />
            </div>
            <div className = "right">

            </div>
            
        </div>
        )
    }
}

export default Profile;