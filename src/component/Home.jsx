import React from 'react';
import { Jumbotron, Button ,Col ,Row, Container} from 'reactstrap';
import BirdImage from '../images/bird.png';
import RankingImage from '../images/Ranking.jpg';
import BlogImage from '../images/blog.jpg';
// import DiscussionImage from '../images/discussion.jpg';
// import ProfileImage from '../images/profile.jpg';
import './Home.css'
import HomeCards from './HomeCards.jsx'

const JumbotronPage = (props) => {
  return (
    <div>
      <Jumbotron className='pr-0'>
	      <Row className="d-flex align-items-center">
	      	<Col sm={6}>
		        <h2 className="display-4">Early Brid <br />Your Best Choice!</h2>
		    	<p className="lead">This is the place where you can chase your dream</p>
	    	</Col>
	    	<Col sm={6} className="limitedhight">
	        	<img src={BirdImage} className="img-fluid ml-auto limitedhight"  />
	        </Col>
	      </Row> 
        <hr className="my-2 mr-5" />
  
          <Button color="primary" href="/about">Learn More</Button>
       
      </Jumbotron>
    </div>
  );
};

// const JumbotronPage = (props) => {
//   return (
//     <div>
//       <Jumbotron fluid>
//         <Container fluid>
//           <h1 className="display-3">Fluid jumbotron</h1>
//           <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//         </Container>
//       </Jumbotron>
//     </div>
//   );
// };


let cards=[
			{size:6, cardTitle:'ranking',cardSubTitle:'To see how you doing',content:'TO BE CONTINUE...',goto:'/ranking',image:RankingImage},
			{size:6, cardTitle:'profile',cardSubTitle:'To make your own file',content:'TO BE CONTINUE...',goto:'/posts',image:BlogImage},
			{size:6, cardTitle:'dicussion',cardSubTitle:'To talk with your friends',content:'TO BE CONTINUE...',goto:'/ranking',image:RankingImage},
			{size:6, cardTitle:'blogs',cardSubTitle:'To record your own thoughts',content:'TO BE CONTINUE...',goto:'/posts',image:BlogImage},
			]

export default class Home extends React.Component{
	render(){
		return (
			<div className="container">
				<JumbotronPage/>
				<HomeCards cards={cards}/>
			</div>
			
		)
	}
} 

