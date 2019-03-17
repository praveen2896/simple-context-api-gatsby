import React from "react"
import MyProvider from "./src/context/provider"

export const wrapRootElement = ({ element }) => (
  <MyProvider>{element}</MyProvider>
)
