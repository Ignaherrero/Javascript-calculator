import React from 'react';
function Button(props) {
  return (
    <div className="new2">
      <button id="clear" onClick={props.handleClick} value="C" >C</button>
      <button id="divide" onClick={props.handleClick} value="/" >/</button>
      <button id="multiply" onClick={props.handleClick} value="*" >X</button>
      <button id="seven" onClick={props.handleClick} value="7" >7</button>
      <button id="eight" onClick={props.handleClick} value="8" >8</button>
      <button id="nine" onClick={props.handleClick} value="9" >9</button>
      <button id="subtract" onClick={props.handleClick} value="-" >-</button>
      <button id="four" onClick={props.handleClick} value="4" >4</button>
      <button id="five" onClick={props.handleClick} value="5" >5</button>
      <button id="six" onClick={props.handleClick} value="6" >6</button>
      <button id="add" onClick={props.handleClick} value="+" >+</button>
      <button id="one" onClick={props.handleClick} value="1" >1</button>
      <button id="two" onClick={props.handleClick} value="2" >2</button>
      <button id="three" onClick={props.handleClick} value="3" >3</button>
      <button id="equals" onClick={props.handleClick} value="=" >=</button>
      <button id="zero" onClick={props.handleClick} value="0" >0</button>
      <button id="decimal" onClick={props.handleClick} value="." >.</button>
      <button id="clearOneDigit" onClick={props.handleClick} value="CE" >CE</button>
    </div >
  )
}
export default Button;