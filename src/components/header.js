import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../components/header.css';


const Header = (props) => {
    return (
        <div>
            <Jumbotron fluid >
                <Container fluid>
                    <h1 className="display-3">My Cryptocurrency</h1>
                    <p className="lead">Favorite currency crypto coins.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;