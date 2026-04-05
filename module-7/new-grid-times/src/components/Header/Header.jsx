import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <DesktopHeader>
            <Logo />
          </DesktopHeader>
          <MobileActionGroup>
            <button>
              <User size={24} />
            </button>
          </MobileActionGroup>
          <DesktopActionGroup>
            <Button>Subscribe</Button>
            <a>Already a subscriber?</a>
          </DesktopActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-offblack);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-content: center;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MobileActionGroup = styled(ActionGroup)`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const DesktopActionGroup = styled.div`
  display: none;
  flex-direction: column;
  gap: 8px;
  align-self: end;
  justify-self: end;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }

  a {
    font-family: var(--font-family-san-serif);
    text-decoration: underline;
    font-style: italic;
  }
`;

const DesktopHeader = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

export default Header;
