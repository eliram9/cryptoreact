import React from 'react';
// import CardText from './cards';

// קומפוננטה שמקבלת ומציגה מידע
class CoinPrice extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                items: [],

            };
    }

    // DOM-פונקציה שמציבה את הקומפוננטה ב 
    // בתוכה יש פונקציה שתפעיל 2 פונקציות כל 5 שניות
    componentDidMount() {
        //setInterval( () => {
        // this.getBCH();
        // this.getXLM();
        // this.getETC();
        // this.getXRP();
        // this.getETH();
        this.getBIT();
    //}, 5000)
    }

        
    // getBCH() {
    //     fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
    //     .then(results => results.json())
    //     .then(results => console.log("Bitcoin Cash:", results.data[1831].quotes.USD.price.toFixed(2)));
    // }
    // getXLM() {
    //     fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
    //     .then(results => results.json())
    //     .then(results => console.log("Stellar:", results.data[512].quotes.USD.price.toFixed(2)));
    // }
    // getETC() {
    //     fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
    //     .then(results => results.json())
    //     .then(results => console.log("Ethereum Classic:", results.data[1321].quotes.USD.price.toFixed(2)));
    // }
    // getXRP() {
    //     fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
    //     .then(results => results.json())
    //     .then(results => console.log("Ripple:", results.data[52].quotes.USD.price.toFixed(2)));
    // }
    // getETH() {
    //     fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
    //     .then(results => results.json())
    //     .then(results => console.log("Ethereum:", results.data[1027].quotes.USD.price.toFixed(2)));
    // }
    getBIT() {
        fetch('https://api.coinmarketcap.com/v2/ticker/?limit=17')
        .then(results => results.json())
        .then(results => console.log("Bitcoin:", results.data[1].quotes.USD.price.toFixed(2)));
    }

    render() {
        
            return null;
    }
}
export default CoinPrice;
