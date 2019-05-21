import React from "react"
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

const FooterContent = styled.footer`
  padding: 0.1em 0;
`;

const FooterInner = styled.div`
    margin-top: 3em;
    text-align： center;
    padding: 1.5em;
    border-top: solid 1px ${props => props.theme.colors.blackLight};
    color: ${props => props.theme.colors.gray};
    font-size: 14px;
    a {
        color: ;
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterContent>
            <ContentWrapper>
                <FooterInner>
                © {new Date().getFullYear()} 13imi, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
                </FooterInner>
            </ContentWrapper>
        </FooterContent>
    );
};

export default Footer;