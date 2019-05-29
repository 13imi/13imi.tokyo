import React from "react"
import { Link, graphql } from "gatsby"
import twemoji from "twemoji";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import styled from "styled-components";
import postContentStyle from "../styles/postContent";

import svgPattern from "../svg/bg.svg";

const Content = styled.section`
  position: relative;
  background: #fff;
  overflow: hidden;
  font-size: 16px;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    z-index: 5;
  }
  &:before {
    top: 0;
    left: 0;
    border-top: 20px solid ${props => props.theme.colors.background};
    border-right: 20px solid transparent;
  }
  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 20px solid ${props => props.theme.colors.background};
    border-left: 20px solid transparent;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin: 0 -${props => props.theme.sideSpace.small};
    &:before,
    &:after {
      content: none;
    }
  }
`;

const HeroImage = styled.p`
  position: relative;
  background: ${props => props.theme.colors.blackLight};
  text-align: center;
  //background-image: url("${svgPattern}");
  background-repeat: repeat;
  background-size: 400px;
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  .emoji {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    min-height: 190px;
  }
`;

const ContentMain = styled.div`
  padding: 1.8em ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const PostTitle = styled.h1`
  margin: 0.1em 0 0.3em;
  font-size: 1.8em;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    font-size: 25px;
  }
  font-weight: 700;
  line-height: 1.5;
`;

const PostDate = styled.time`
  display: block;
  color: ${props => props.theme.colors.silver};
  font-size: 0.9em;
  letter-spacing: 0.05em;
`;

const PostContent = styled.div`
  ${postContentStyle}
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { title, description, date, emoji } = post.frontmatter;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
        />
        <Content>
        <HeroImage
            dangerouslySetInnerHTML={{
              __html: twemoji.parse(emoji || "😺", {
                folder: "svg",
                ext: ".svg"
              })
            }}
          />
          <ContentMain>
            <PostDate>{date}</PostDate>
            <PostTitle>{title}</PostTitle>
            <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          </ContentMain>
        </Content>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        emoji
      }
    }
  }
`
