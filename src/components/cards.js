import React from 'react';
import { Container, Row,  Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import btc from './images/btc.png';
import eth from './images/eth.png';
import xrp  from './images/xrp.png';
import bch from './images/bch.png';
import etc from './images/etc.png';
import xlm from './images/xlm.png';
// import './price';
import '../components/cards.css';


// Logo style
const logo = {
    width: '50px',
    height: '50px',
}    

const Cards = ({item}) => {
    return (
        <Container>
            <Row>
                <Col xs="4">
                    <Card>
                    <CardImg top width="100%" src={btc} style={logo}/>
                        <CardBody>
                            <CardTitle>BTC - Bitcoin</CardTitle>    
                            <CardText className="bit">${}</CardText>
                        </CardBody> 
                    </Card>
                </Col>

                <Col xs="4">
                    <Card>
                    <CardImg top width="100%" src={eth} style={logo}/>
                        <CardBody>
                            <CardTitle>ETH - Ethereum</CardTitle>    
                            <CardText>$$$</CardText>
                        </CardBody> 
                    </Card>
                </Col>

                <Col xs="4">
                    <Card>
                    <CardImg top width="100%" src={xrp} style={logo}/>
                        <CardBody>
                            <CardTitle>XRP - Ripple</CardTitle>    
                            <CardText>$$$</CardText>
                        </CardBody> 
                    </Card>
                </Col>
            </Row> 

            <br></br>
            <Row>
                <Col xs="4">
                    <Card>
                    <CardImg top width="100%" src={etc} style={logo}/>
                        <CardBody>
                            <CardTitle>ETC - Ethereum Classic </CardTitle>    
                            <CardText>$$$</CardText>
                        </CardBody> 
                    </Card>
                </Col>

                <Col xs="4">
                    <Card>
                    <CardImg top width="100%" src={xlm} style={logo}/>
                        <CardBody>
                            <CardTitle>XLM - Stellar</CardTitle>    
                            <CardText>$$$</CardText>
                        </CardBody> 
                    </Card>
                </Col>

                <Col xs="4">
                    <Card>
                    <CardImg top width="100%" src={bch} style={logo}/>
                        <CardBody>
                            <CardTitle>BCH - Bitcoin Cash</CardTitle>    
                            <CardText>$$$</CardText>
                        </CardBody> 
                    </Card>
                </Col>
            </Row>

            <br></br>

        </Container>
    );
};

export default Cards;