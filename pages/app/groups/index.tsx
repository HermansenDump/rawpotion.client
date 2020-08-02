import DashboardWrapper from "../../../src/components/layouts/dashboard.wrapper";
import React from "react";
import { Breadcrumbs, Container, Divider, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "../../../src/components/Link";
import { BreadcrumbsContainer } from "../../../src/components/breadcrumbs.container";
import { CenteredParagraph } from "../../../src/components/styled/centered.paragraph";
import { ALL_GROUPS_QUERY } from "../../../src/lib/graphql/groups";
import { initializeApollo } from "../../../src/lib/graphql/graphql";
import GroupsList from "../../../src/components/GroupsList";
import { initializeStore, RootState } from "../../../src/lib/slices/store";
import { useSelector } from "react-redux";

const GroupsPage = ({ groups }) => {
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
      <GroupsList groups={groups}></GroupsList>
    </DashboardWrapper>
  );
};

export default GroupsPage;

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({ query: ALL_GROUPS_QUERY });

  return {
    props: {
      groups: data.groups,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
