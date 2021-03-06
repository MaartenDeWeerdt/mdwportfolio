import React, { Component } from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { theme, reset } from "../styles"
import SEO from "./SEO"

const globalStyle = css`
  ${reset}
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
    background: repeating-linear-gradient(
      40deg,
      transparent,
      transparent 200px,
      rgba(32, 28, 61, 0.1) 0,
      rgba(32, 28, 61, 0.1) 300px,
      transparent 0,
      transparent 550px,
      rgba(184, 79, 200, 0.05) 0,
      rgba(184, 79, 200, 0.05) 725px,
      transparent 0,
      transparent 1000px,
      rgba(52, 18, 57, 0.05) 0,
      rgba(52, 18, 57, 0.05) 1100px,
      transparent 0,
      transparent 1200px,
      rgba(157, 54, 174, 0.1) 0,
      rgba(157, 54, 174, 0.1) 1400px,
      transparent 0,
      transparent 1500px
    );
  }
  ::selection,
  mark {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.blueDark};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
  @media (min-width: ${theme.breakpoints.m}) {
    h1 {
      font-size: 3rem !important;
    }
    h2 {
      font-size: 2.25rem !important;
    }
    h3 {
      font-size: 1.875rem !important;
    }
    h4 {
      font-size: 1.5rem !important;
    }
    h5 {
      font-size: 1.25rem !important;
    }
    h6 {
      font-size: 1rem !important;
    }
  }
`

const PureLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle} />
    <SEO />
    <main>{children}</main>
  </ThemeProvider>
)

class Layout extends Component {
  render() {
    return <PureLayout {...this.props}>{this.props.children}</PureLayout>
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
