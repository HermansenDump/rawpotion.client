import DashboardWrapper from "../../components/layouts/dashboard.wrapper";
import React, { FC } from "react";
import {
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Typography,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { BreadcrumbsContainer } from "../../components/breadcrumbs.container";
import { CenteredParagraph } from "../../components/styled/centered.paragraph";
import GroupsList from "../../components/GroupsList";

const GroupsPage: FC<any> = ({ groups }) => {
  if (!groups || groups?.length == 0) {
    return (
      <DashboardWrapper>
        <BreadcrumbsContainer>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link href="/app" color="inherit">
              App
            </Link>
            <Typography color="textPrimary">Groups</Typography>
          </Breadcrumbs>
        </BreadcrumbsContainer>
        <Container maxWidth="sm">
          <CenteredParagraph>No groups</CenteredParagraph>
          <Divider />
          <CenteredParagraph>
            <Link href="/app/groups/join">Join</Link> or{" "}
            <Link href="/app/groups/create">Create</Link> a group
          </CenteredParagraph>
        </Container>
      </DashboardWrapper>
    );
  }

  return (
    <DashboardWrapper>
      <GroupsList groups={groups} />
    </DashboardWrapper>
  );
};

export default GroupsPage;
