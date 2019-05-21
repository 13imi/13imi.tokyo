import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import Header from "../components/Header"
import ContentWrapper from "../components/ContentWrapper"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components";

const Content = styled.div`
  margin-top: 2em;
  display: flex;
  min-height: 85vh;
  align-items: flex-start;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <ThemeProvider theme={theme}>
      <div className="siteRoot">
        <Header title={title} location={location} />
        <ContentWrapper>
          <Content>
          <main>{children}</main>
          </Content>
        </ContentWrapper>
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
