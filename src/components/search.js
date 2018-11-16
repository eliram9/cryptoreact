import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button, Col, Card, Row} from 'reactstrap';

export default class Search extends React.Component {

  render() {
    return ( 
        <Row>
            <Col sx="2"></Col>
            <Col xs="8">
                <Card>
                    <InputGroup>
                        <Input placeholder="Serach here - by acronyms only " />
                        <InputGroupAddon addonType="append"><Button color="secondary">Go!</Button></InputGroupAddon>
                    </InputGroup>
                </Card>
            </Col> 
            <Col sx="2"></Col>
        </Row>
    );
  }
}

