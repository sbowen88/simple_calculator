import React, { Component } from 'react';
import "./Homepage.css";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: []
        };
    }

    handleClear() {
        this.setState({ numbers: [] });
        console.log('cleared')

    }
    handleClick(value) {
        let stuff = this.state.numbers.concat(value)
        this.setState({ numbers: stuff })
        console.log('number added', value, this.state.numbers)
    }

    render() {
        return (
            <div className="homepage_container">
                <div className="calculator_container">
                    <div className="magic_box">{this.state.numbers}</div>
                    <div className="buttons_container">
                        <div className="row">
                            <button onClick={() => this.handleClear()} label="C" value="clear" >C</button>
                            <button onClick={() => this.handleClick("/")} label="/" value="/" >/</button>
                            <button onClick={() => this.handleClick("=")} label="=" value="=" >=</button>
                        </div>
                        <div className="row">
                            <button onClick={() => this.handleClick(7)} label="7" value="7" >7</button>
                            <button onClick={() => this.handleClick(8)} label="8" value="8" >8</button>
                            <button onClick={() => this.handleClick(9)} label="9" value="9" >9</button>
                        </div>
                        <div className="row">
                            <button onClick={() => this.handleClick(4)} label="4" value="4" >4</button>
                            <button onClick={() => this.handleClick(5)} label="5" value="5" >5</button>
                            <button onClick={() => this.handleClick(6)} label="6" value="6" >6</button>
                        </div>
                        <div className="row">

                            <button onClick={() => this.handleClick(1)} label="1" value="1" >1</button>
                            <button onClick={() => this.handleClick(2)} label="2" value="2" >2</button>
                            <button onClick={() => this.handleClick(3)} label="3" value="3" >3</button>
                        </div>
                        <div className="row">
                            <button onClick={() => this.handleClick(0)} label="0" value="0" >0</button>
                        </div>
                        <div className="row">
                            <button onClick={() => this.handleClick("-")} label="-" value="-" >-</button>
                            <button onClick={() => this.handleClick(".")} label="." value="." >.</button>
                            <button onClick={() => this.handleClick("+")} label="+" size="2" value="+" >+</button>
                            <button onClick={() => this.handleClick("*")} label="*" size="2" value="*">*</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;