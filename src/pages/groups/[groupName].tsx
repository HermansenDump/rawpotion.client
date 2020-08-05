import React from "react";
import DashboardWrapper from "../../components/layouts/dashboard.wrapper";
import { BreadcrumbsContainer } from "../../components/breadcrumbs.container";
import { Breadcrumbs, Container, Link, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const GroupPage = () => {
  const groupName = "some group name";

  return (
    <DashboardWrapper>
      <BreadcrumbsContainer>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link href="/app" color="inherit">
            App
          </Link>
          <Link href="/app/groups" color="inherit">
            Groups
          </Link>
          <Typography color="textPrimary">{groupName}</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <Container maxWidth="sm">
        <p>{groupName}</p>
      </Container>
    </DashboardWrapper>
  );
};

export default GroupPage;
