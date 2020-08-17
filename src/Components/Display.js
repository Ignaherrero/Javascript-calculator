import React from 'react';
function Display(props) {
  return (
    <div>
      <span id="display" className="display">{props.state.digit ? props.state.digit : 0}</span>
      <span id="result" className="result">{props.state.result ? props.state.result : 0}</span>
    </div>
  )
}
export default Display;