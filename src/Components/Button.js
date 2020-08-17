import React from 'react';
function Button(props) {
  return (
    <div className="container">
      <button id="clear" className="button clear" onClick={props.handleClick} value="C" >C</button>
      <button id="divide" className="button" onClick={props.handleClick} value="/" >/</button>
      <button id="multiply" className="button" onClick={props.handleClick} value="*" >X</button>
      <button id="seven" className="button" onClick={props.handleClick} value="7" >7</button>
      <button id="eight" className="button" onClick={props.handleClick} value="8" >8</button>
      <button id="nine" className="button" onClick={props.handleClick} value="9" >9</button>
      <button id="subtract" className="button" onClick={props.handleClick} value="-" >-</button>
      <button id="four" className="button" onClick={props.handleClick} value="4" >4</button>
      <button id="five" className="button" onClick={props.handleClick} value="5" >5</button>
      <button id="six" className="button" onClick={props.handleClick} value="6" >6</button>
      <button id="add" className="button" onClick={props.handleClick} value="+" >+</button>
      <button id="one" className="button" onClick={props.handleClick} value="1" >1</button>
      <button id="two" className="button" onClick={props.handleClick} value="2" >2</button>
      <button id="three" className="button" onClick={props.handleClick} value="3" >3</button>
      <button id="equals" className="button equals" onClick={props.handleClick} value="=" >=</button>
      <button id="zero" className="button" onClick={props.handleClick} value="0" >0</button>
      <button id="decimal" className="button" onClick={props.handleClick} value="." >.</button>
      <button id="clearOneDigit" className="button" onClick={props.handleClick} value="CE" >CE</button>
    </div >
  )
}
export default Button;