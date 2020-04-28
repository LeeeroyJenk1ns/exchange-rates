import React, { Component } from 'react';

class Nav extends Component {

    state = {
        active: false,
        style: {
            marginLeft: "-350px"
        }
    }

    isActive = () => {
        if (this.state.opacity) {
            this.setState({
                opacity: false,
                style: {
                    marginLeft: "-350px"
                }
            });
        } else {
            this.setState({
                opacity: true,
                style: {
                    marginLeft: "20px"
                }
            });
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><span onClick={this.isActive} >О приложении</span></li>
                </ul>
                <div className="info-app" style={this.state.style}>
                    <p>Данное приложение предназначено для просмотра курса валют.
                         Данные достоверные, так как используется api с европейского центр банк.</p>
                </div>
            </nav>
        )
    }
}

export default Nav;