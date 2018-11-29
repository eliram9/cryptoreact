import React from 'react';
import { Row, Col, Card, InputGroup, Input, Button, InputGroupAddon,Modal, 
        ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

//חיפוש באותיות גדולות בלבד
const text = {
    textTransform: 'uppercase'    
}


class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }
    
    //אובייקט מחיר של מטבע ע"י חיפוש
    state = {
        price: undefined
    }


    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return ( 
            <Row>
            <Col sx="2"></Col>
            <Col xs="8">
                <Card>
                    <InputGroup>
                        <Input placeholder="Serach here - by acronyms only" style={text} />
                        <InputGroupAddon addonType="append" >
                            <div>
                                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Go!</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                        <ModalHeader toggle={this.toggle} close={closeBtn}>Search Results</ModalHeader>
                                            <ModalBody>
                                                <h3>Currently, 1 X {} coin is worth $x.</h3>
                                                <br></br>
                                                Go back for search more coins
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="warning" onClick={this.toggle}>Go Back</Button>
                                            </ModalFooter>
                                    </Modal>
                            </div>
                        </InputGroupAddon>
                    </InputGroup>
                </Card>
            </Col> 
            <Col sx="2"></Col>
        </Row>  
        );
    }
}

export default Search;

