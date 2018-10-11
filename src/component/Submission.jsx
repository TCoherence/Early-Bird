import React, {Component} from "react"

import './Submission.css'

export default class Submission extends Component {
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
        const rectOffsetX = 25
        const rectOffsetY = 12
        var calender = []
        for ( var j = 0; j < 52; j++ ) {
            var group = []
            for ( var i = 0; i < 7; i++ ) {
                group.push(<Rect x = {25} y = {i*12} submission = {Math.random()*120 - 60}/>)
            }
            calender.push(<svg x = {j*13}>{group}</svg>)
        }
        const wday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        const month =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        let dateStyle = {
            fontSize : 9,
            textAlign :"center"
        }
        const wdayOffsetX = -3
        const wdayOffsetY = 8
        var wdays = []
        for ( i = 0; i < 7; i++ ) {
            wdays.push(<text style={dateStyle} dx = {-3} dy={8 + 12*i} display = {(i & 1)== 0 ? "none":""}>{wday[i]}</text>)
        }

        

        // get currentMonth, calculate the offset.
        var time = new Date()
        var curMonth = time.getMonth()
        var curDay = time.getDay()
        // push last col of calender
        var group = []
        for ( i = 0; i < curDay; i++ ) { 
            group.push(<Rect x = {25} y = {i*12} submission = {Math.random()*60}/>)
        }
        calender.push(<svg x = {52*13}> {group}</svg>)
        var months = []
        const monthOffsetX = 13
        const monthOffsetY = -10
        for ( i = 0; i < 12; i++ ) {
            let idx = (i + curMonth) % 12
            months.push(<text style = {dateStyle} dx = {26+i*55} dy = {-10}>{month[idx]}</text>)
        }
        


        


        return (
            <div className = "container submission" >
                <p>{this.state.submissionNumber} submissions in the last year.</p>
                
                {/* <a href="javascript;" title="悬停的文字">将鼠标移到这个标签上，就会显示"悬停的文字"</a><br></br> */}
                <div className = "calender">
                    <svg width = {1012}height = {this.state.height}>
                        <g transform = "translate(16,20)">
                            {calender}
                            {wdays}
                            {months}
                        </g>
                        
                        {/* {months} */}
                        {/* <g transform = "translate(10,10)">
                        <Rect />
                        </g>
                        <rect width={10} height={10} style={{ fill: "#ebedf0" }} /> */}

                    </svg>
                </div>
                

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
                    submission <  30 ? COLOR_VALUE[2] :
                    submission <  50 ? COLOR_VALUE[3] :
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
                <rect style = {rectStyle} onMouseMove = {this.showInfo} onMouseOut = {this.hideInfo} />
        );
    }
}

// pop-up window information

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