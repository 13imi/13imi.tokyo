import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import ContentWrapper from "../components/ContentWrapper";

const FooterContent = styled.footer`
  padding: 0.1em 0;
`;

const FooterInner = styled.div`
    margin-top: 3em;
    text-align: center;
    padding: 1.5em;
    border-top: solid 1px ${props => props.theme.colors.blackLight};
    color: ${props => props.theme.colors.gray};
    font-size: 14px;
    a {
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <FooterContent>
            <ContentWrapper>
                <FooterInner>
                    © {new Date().getFullYear()}, <Link to={`/`}>13imi</Link> All rights reserved.
                </FooterInner>
            </ContentWrapper>
        </FooterContent>
    );
};

export default Footer;