import React from 'react';
function Display(props) {
  return (
    <div className="new1">
      <span id="display" >{props.state.digit ? props.state.digit : 0}</span>
      <span id="result">{props.state.result ? props.state.result : 0}</span>
    </div>
  )
}
export default Display;