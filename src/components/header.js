import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../components/header.css';

const style = {
    backgroundImage: "url(https://www.coinblaze.us/wp-content/uploads/2018/10/shutterstock_1064476223-2800x1200.png)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  
}

const Header = (props) => {
    return (
        <div>
            <Jumbotron fluid style={style} >
                <Container fluid>
                    <h1 className="display-3">My Cryptocurrency</h1>
                    <p className="lead">Favorite currency crypto coins</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;