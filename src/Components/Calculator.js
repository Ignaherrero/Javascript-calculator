import React from 'react';
import Button from './Button'
import Display from './Display';
// FIXME agregar limite en el display
// FIXME reveer y agregar redex, tambien ver el tema de CE
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      digit: '0',
      finish: false,
      result: '0',
      decimal: false,
      operator: false,
      formula: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    switch (event.target.value) {
      case '+':
        this.operation(event)
        break
      case '-':
        this.operation(event)
        break
      case '*':
        if (this.state.operator) {
          this.setState({
            digit: this.state.digit.toString().slice(0, -1) + event.target.value,
            decimal: false,
          })
        } else {
          this.setState({
            digit: this.state.digit + event.target.value,
            decimal: false,
          })
        }
        break
      case '/':
        this.operation(event)
        break
      case '=':
        const result = +eval(this.state.digit).toFixed(4)
        this.setState({
          digit: result,
          finish: true,
          result: result,
          operator: false
        });
        break;
      case '.':
        if (!this.state.decimal) {
          this.setState({
            digit: this.state.digit + event.target.value,
            decimal: true,
            operator: false
          })
        }
        break;
      case 'C':
        this.clearDisplay();
        break;
      case 'CE':
        this.setState({
          digit: this.state.digit.slice(0, -2)
        })
        break;
      case '0':
        this.setState({
          digit: this.state.digit.replace(/\b0+/g, '') + event.target.value
        })
        break;
      default:
        if (event.target.value !== '0' && this.state.digit === '0') {
          this.setState({
            digit: event.target.value,
            operator: false
          })
        } else {
          this.setState({
            digit: this.state.digit + event.target.value,
            operator: false

          })
        }
    }
  }

  operation(event) {
    if (this.state.operator) {
      this.setState({
        digit: this.state.digit.slice(0, -1) + event.target.value,
        decimal: false,
        operator: event.target.value === '*' ? false : true
      })
    } else {
      this.setState({
        digit: this.state.digit + event.target.value,
        decimal: false,
        operator: event.target.value === '*' ? false : true
      })
    }
  }

  clearDisplay() {
    this.setState({
      digit: '',
      result: '',
      finish: false,
      decimal: false
    })
  }

  render() {
    return (
      <div >
        <Display state={this.state} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;