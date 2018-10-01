import React, {Component } from 'react';
import {Card, Button, CardTitle, CardText, Badge} from 'reactstrap';
import {Jumbotron} from 'reactstrap';
import Image from '../images/wheels.png';

export default class About extends Component {
    render() {
        return (
            <div className = 'container' >
                <Jumbotron>
                    <h1 className="display-3 text-center">What's NEW</h1>>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1 className="display-3 text-center">About Early-Bird</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1 className="display-3 text-center">What we do</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <Jumbotron>
                    <h1 className="display-3 text-center">Who are we</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
                <div className = 'text-center'>
                    <Button href='#' color = 'info' >Follow us on Facebook<img width = "5%" src = {Image}></img></Button>
                </div>

                
            </div>
        )
    };
}