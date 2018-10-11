import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Col, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import {Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Submission from "./Submission.jsx"

import AvatarImage from "../images/avatar.jpeg"
import './Profile.css'

// avatar param
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
    // 
    return (
        // Navigation Bar
        <div>
            <div >
                <NavBar />
            </div>
            {/* // Submission */}
            <div>
                <Submission />
            </div>
            {/* // Ranking Graph presentation */}
            <div>
                {/* <RankGraph /> */}
            </div>
            {/* // posts abstract */}
            <div>

            </div>
        </div>
    )
}





class NavBar extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
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

// Detail profile layout
class Profile extends Component {

    render(){
        return (
        <div className = "wholecontainer px16 mt24">
            <div className = "left float-left" >
                <Avatar />
            </div>
            <div className = "main float-left">
                <ProfileDetail  />
            </div>
            
        </div>
        )
    }
}

export default Profile;