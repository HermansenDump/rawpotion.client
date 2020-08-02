import React from "react";
import { useRouter } from "next/router";
import DashboardWrapper from "../../../src/components/layouts/dashboard.wrapper";
import { BreadcrumbsContainer } from "../../../src/components/breadcrumbs.container";
import { Breadcrumbs, Container, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "../../../src/components/Link";

const GroupPage = () => {
  const router = useRouter();
  const { groupName } = router.query;

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
