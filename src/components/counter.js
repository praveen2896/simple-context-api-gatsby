import React, { Component } from "react"
import { MyContext } from "../context/provider"

export default class Counter extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              counter value : {context.counter}
              <br />
              <button onClick={context.incrementCount}>Increment</button>
              <button onClick={context.decrementCount}>decrement</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}
