import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './contador.js'
import counter from './reducer/counter.js'


const store = createStore(counter)
const htmlroot = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  htmlroot
)

render()
store.subscribe(render)




