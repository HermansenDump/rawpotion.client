import React, { FC } from "react";
import { AppBar, Box, Container, Link, Toolbar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/state/store";
import styled from "styled-components";

const IsLoggedIn = () => (
  <div>
    <SpacedAnchor href="/app/groups" variant="subtitle1">
      Groups
    </SpacedAnchor>
    <Anchor href="/app/profile" variant="subtitle1">
      Profile
    </Anchor>
  </div>
);

const IsNotLoggedIn = () => (
  <div>
    <Anchor href="/identity/login" color="primary">
      Login
    </Anchor>
  </div>
);

const DashboardWrapper: FC = (props) => {
  const user = useSelector<RootState>((state) => state.auth.user);

  return (
    <div>
      <AppBar>
        <Container>
          <Toolbar>
            <Title href="/app" variant="h6">
              Rawpotion
            </Title>
            {user && IsLoggedIn()}
            {!user && IsNotLoggedIn()}
          </Toolbar>
        </Container>
      </AppBar>
      <Box my={12}>{props.children}</Box>
    </div>
  );
};

export default DashboardWrapper;

const Anchor = styled(Link)`
  ${({ theme }) => `
    color: ${theme.palette.grey.A400};
  `};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  :hover,
  :focus,
  :active {
    text-decoration: underline;
  }
`;

const SpacedAnchor = styled(Anchor)`
  margin-right: 40px;
`;

const Title = styled(Anchor)`
  flex-grow: 1;
  text-transform: uppercase;
`;
