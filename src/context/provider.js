import React, { Component } from "react"

const defaultState = {
  counter: 0,
  incrementCount: () => {},
  decrementCount: () => {},
}
export const MyContext = React.createContext(defaultState)

export default class MyProvider extends Component {
  state = {
    counter: 0,
  }

  incrementCount = () => {
    let counter = this.state.counter + 1
    this.setState({ counter })
  }

  decrementCount = () => {
    let counter = this.state.counter - 1
    this.setState({ counter })
  }

  render() {
    const { children } = this.props
    const { counter } = this.state
    return (
      <MyContext.Provider
        value={{
          counter,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount,
        }}
      >
        {children}
      </MyContext.Provider>
    )
  }
}
