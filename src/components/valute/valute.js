import React, {Component} from 'react';

class Valute extends Component {

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

    checkValuteFirst = async (e) => {
        const vall = e.target.value;
        await this.setState(({first}) => {
            const val = {...first, valute: vall}
            return {
                first: val
            }
        })
        this.props.checkValute(this.state.first, this.state.second);
    }

    checkValuteSecond = async (e) => {
        const vall = e.target.value;
        await this.setState(({second}) => {
            const val = {...second, valute: vall}
            return {
                second: val
            }
        })
        this.props.checkValute(this.state.first, this.state.second);
    }

    changeInputFirst = async (e) => {
        const vall = e.target.value;
        await this.setState(({first}) => {
            const val = {...first, value: +vall || 0}
            return {
                first: val
            }
        })
        this.props.checkValute(this.state.first, this.state.second);
    }

    render() {
        const { second} = this.props.valuteInfo;

        return (
            <div className="valute-block">
                <div className="valute-block-select">
                    <select onChange={this.checkValuteFirst} className="valute">
                        <option value="USD">USD</option>
                        <option value="RUB">RUB</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <input onChange={this.changeInputFirst} type="text" defaultValue="0" />
                </div>
                <div className="valute-block-select">
                    <select onChange={this.checkValuteSecond} className="valute">
                        <option value="RUB">RUB</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <input type="text" value={second.value} readOnly />
                </div>
            </div>
        )
    }
}

export default Valute;