import React, { Component } from 'react';
import Header from './components/header';
import Cards from './components/cards';
import Search from './components/search';
import CoinPrice from './components/price';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cards />
                <Search />
                <CoinPrice />
            </div>
        );
    }
}

export default App;
