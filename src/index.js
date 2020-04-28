import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/header';
import Content from './components/content/content';

class App extends Component {

    state = {
        first: {
            valute: "USD",
            value: 0
        },
        second: {
            valute: "RUB",
            value: 0
        }
    }

    checkValute = (valF, valS) => {
        this.setState({
            first: valF,
            second: valS
        })
    }

    getValute = async (url) => {
        const response = await fetch(url);
        return await response.json();
    }

    offThrow = () => {
        this.setState({
            second: {
                valute: this.state.second.valute,
                value: 0
            }
        })
    }

    render() {
        return (
            <div>
                <Header
                    getValute={this.getValute}
                    checkValute={this.checkValute}
                    valuteInfo={this.state}
                    offThrow={this.offThrow} />
                <Content
                    checkValute={this.checkValute}
                    valuteInfo={this.state} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));