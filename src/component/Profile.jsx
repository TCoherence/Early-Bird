import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Col, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
            <div>
                <NavBar />
            </div>
            {/* // Submission */}
            <div>
                <Submission />
            </div>
            {/* // Ranking Graph presentation */}
            <div>
                
            </div>
            {/* // posts abstract */}
            <div>

            </div>
        </div>
    )
}


class Submission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date : null,
            submissionNumber: 10,
            height : 116,
            width : window.innerWidth,
        }
        this.refDom = null
    }

    componentDidMount() {
        // this.drawGraph()
        this.setState({
            
        })
    }


    updateNumber = (value) => {
        this.setState({
            submissionNumber : value
        })
    }
    // show a little window to show detail
    RectDetailShow = (date) => {

    }

    init = () => {
        
    }


    render() {
        var calander = []
        for ( var j = 0; j < 52; j++ ) {
            var group = []
            for ( var i = 0; i < 7; i++ ) {
                group.push(<Rect x = {25} y = {i*12} submission = {i*2}/>)
            }
            calander.push(<svg x = {j*13}>{group}</svg>)
        }
        const wday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        const month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        let dayStyle = {
            fontSize : 9,
            textAlign :"center"
        }
        var wdays = []
        for ( i = 0; i < 7; i++ ) {
            wdays.push(<text style={dayStyle} dx = {-7} dy={8 + 12*i} display = {(i & 1)== 0 ? "none":""}>{wday[i]}</text>)
        }

        

        // get currentMonth, calculate the offset.
        var time = new Date()
        let curMonth = time.getMonth() 
        var offset = 0

        for ( i = 0 ; i < 12; i++ ) {
            if ( month[i] == curMonth ) 
                offset = i
        }
        
        


        return (
            <div ref = {ref => {this.refDom = ref}} className = "container">
                <p >{this.state.submissionNumber} submissions in the last year.</p>
                {/* <a href="javascript;" title="悬停的文字">将鼠标移到这个标签上，就会显示"悬停的文字"</a><br></br> */}
                <svg width = {this.state.width} height = {this.state.height}>
                    <g transform = "translate(16,20)">
                        {calander}
                    </g>
                    
                    {/* {months} */}
                    {/* <g transform = "translate(10,10)">
                    <Rect />
                    </g>
                    <rect width={10} height={10} style={{ fill: "#ebedf0" }} /> */}

                </svg>

            </div>
        );
    }
}

class Rect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date : null,
            submission : props.submission,
            color : "#ebedf0",
            isHover : false,
            x : props.x,
            y : props.y
        }
       
    }
    componentWillMount() {
        const COLOR_VALUE = ["#ebedf0", "#c6e48b","#7bc96f","#239a3b","#196127"] // from shadow to deeper
        var submission = this.state.submission
        this.setState({
            color : submission == 0  ? COLOR_VALUE[0] :
                    submission <  10 ? COLOR_VALUE[1] : 
                    submission <  20 ? COLOR_VALUE[2] :
                    submission <  30 ? COLOR_VALUE[3] :
                                       COLOR_VALUE[4] 
        })
    }
    componentDidMount() {
        
    }
    showInfo = () => {
        this.setState({
            isHover : false
        })
    }
    hideInfo = () => {
        this.setState({
            isHover : true
        })
    }

    render() {
        let rectStyle = {
            fill : this.state.color,
            width : 10,
            height : 10,
            x : this.state.x,
            y : this.state.y
        }
        let textStyle = {
            fill : this.state.color,
            width : 10,
            height : 10,
            
        }
        
        return (
                <svg > 
                    <rect style = {rectStyle} onMouseMove = {this.showInfo} onMouseOut = {this.hideInfo} />
                </svg>
        );
    }
}

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: props.x,
            y: props.y
        }
    }

    render() {
       
        return (
            <svg y = {-15} >
                <rect width = "100" height = "24" ></rect>
            </svg>
        );
    }
}


class NavBar extends Component {
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

// Detail profile layout
class Profile extends Component {

    render(){
        return (
        <div className = "flex-container">
            <div className = "" />
            <div className = "" >
                <Avatar />
            </div>
            <div className = "main">
                <ProfileDetail  />
            </div>
            <div className = "">

            </div>
            
        </div>
        )
    }
}

export default Profile;