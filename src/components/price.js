import React from 'react';
// import CardText from './cards';

// קומפוננטה שמקבלת ומציגה מידע
class CoinPrice extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                'items': []
            };
    }

    
    componentDidMount() {
        this.getItems();

    }

        
    getItems() {
            fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
            .then(results => results.json())
            .then(results => {
                this.setState({items:results.data}, ( )=> {
console.log(this.state)
                })
            });
    }


    render() {
        const cryptoItems = this.state.items.map((item, i) => {
            return (
                <li>{item}</li>
            )
        })
            return(
                <div>
                    <h3>Items</h3>
                    <ul>{cryptoItems}</ul>
                </div>
            );
    }
}
export default CoinPrice;
