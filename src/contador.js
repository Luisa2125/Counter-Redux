import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>	
      	<h1>Contador Redux</h1>
	      <div className="input-group">
	      	<span className="input-group-addon" style={{background:'#000000', color:'white'}} >Counter</span>
	      	<input id="msg" type="text" className="form-control" name="msg" placeholder="Additional Info" style={{width:"80px"}}  value={value}/>
	      </div>
	      <div></div>
	      <div className="btn-group" style={{ display:"grid",gridTemplateColumns: "100px 100px",gridTemplateRows: "30px  " }}>
	        <button  type="button" className="btn" style={{background:'#000000', color:'white'}} onClick={onIncrement}>
	          SUMAR
	        </button>
	        {' '}
	        <button type="button" className="btn" style={{background:'#000000', color:'white'}} onClick={onDecrement}>
	          RESTAR
	        </button>
	        {' '}
	      </div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
