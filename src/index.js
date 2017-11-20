import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import{ createStore } from 'redux';

const states= []

function sumaArray(array){
  let state = 0
  for(let i = 0;i<array.length;i++){
    state = state + parseInt(array[i])
  }
  return state
}
function RealizarSuma(state=[], action){
  switch(action.type){
    
    case 'SUMAR':
      states.push([action.data]+1)
      return state =sumaArray(states) 
    case 'RESTA':
      states.push([action.data]-1)
      return state = sumaArray(states)
    default:
      return state
  }
}

let store = createStore(RealizarSuma);


class App extends Component{
  constructor(){
    super()
    store.subscribe(() =>{
      console.log(store.getState())
    });
  }
suma(){
  console.log('sumita')
  store.dispatch({type:'SUMAR',data:0})
}
resta(){
  console.log('restita')
  store.dispatch({type:'RESTA',data:0})
}

  render(){
    return(
      <div className = "App">
        <h1>Simple redux counter</h1>
        <button onClick={this.suma}>SUMAR</button>
        <button onClick={this.resta}>RESTAR</button>
        <div></div>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'))

