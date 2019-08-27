import React from "react"
import { Content } from "../elements"

const Header = ({ header, offset }) => (
  <div>
    <Content speed={0.4} offset={offset}>
      <h1>{header.data.title.text}</h1>
      <h3>{header.data.subtitle.text}</h3>
    </Content>
  </div>
)

export default Header
