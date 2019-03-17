import React, { Component } from "react"

export const MyContext = React.createContext()

export default class MyProvider extends Component {
  state = {
    counter: 0,
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          incrementCount: () => {
            this.setState({
              counter: this.state.counter + 1,
            })
          },
          decrementCount: () => {
            this.setState({
              counter: this.state.counter - 1,
            })
          },
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
