import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const HeaderTag = styled.header`
    width: 100%;
    padding: 16px 0;
    text-align: center;
    background-color: ${props => props.theme.colors.acc};
`;

const HeaderInner = styled.div`
    position: relative;
    h1,
    h3 {
        width: 100%;
    }
`;

const Header = ({ title, location }) => {
    const rootPath = `${__PATH_PREFIX__}/`;

    let headerLogo;
    if (location.pathname === rootPath) {
      headerLogo = <h1>{title}</h1>;
    } else {
      headerLogo = <h3>{title}</h3>;
    }
    return (
      <HeaderTag>
          <HeaderInner><Link to={`/`} className="logo-link">{headerLogo}</Link></HeaderInner>
      </HeaderTag>
    );
};

export default Header;