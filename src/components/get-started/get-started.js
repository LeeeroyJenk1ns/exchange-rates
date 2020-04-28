import React, {Component} from 'react';

class GetStarted extends Component {

    state = {
        valute: null,
        value: 0,
        valueSecond: 0
    }

    getValute = () => {
        const {first, second} = this.props.valuteInfo;
        this.props.getValute(`https://api.exchangeratesapi.io/latest?base=${first.valute}`)
            .then((data) => {
                this.setState({
                    valute: first.valute,
                    value: first.value,
                    valueSecond: data.rates[second.valute] * first.value
                })
            })
            .then(() => {
                this.props.checkValute({
                        valute: first.valute,
                        value: first.value
                    },
                    {
                        valute: second.valute,
                        value: this.state.valueSecond
                    }
                )
            })
    }

    render() {
        return (
            <div className="get-started">
                <button onClick={this.getValute} className="btn">Рассчитать</button>
                <button onClick={this.props.offThrow} className="btn">Сбросить</button>
            </div>
        )
    }
}

export default GetStarted;