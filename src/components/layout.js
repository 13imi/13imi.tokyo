import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Header from "../components/Header"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <ThemeProvider theme={theme}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title} location={location} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} 13imi, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <GlobalStyle />
      </div>
      </ThemeProvider>
    )
  }
}

export default Layout
