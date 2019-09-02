import React from "react"
import { withTheme } from "emotion-theming"
import css from "@emotion/css"

const Footer = ({ theme }) => (
  <div>
    <p css={css({ textAlign: "center" })}>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </p>
  </div>
)

export default withTheme(Footer)
