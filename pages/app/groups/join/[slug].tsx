import { useRouter } from "next/router";
import DashboardWrapper from "../../../../src/components/layouts/dashboard.wrapper";
import React from "react";
import { BreadcrumbsContainer } from "../../../../src/components/breadcrumbs.container";
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "../../../../src/components/Link";
import styled from "styled-components";

const JoinWithLinkPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [group, _] = React.useState<{
    name: string;
    memberCount: number;
  }>({
    name: "some-group-name",
    memberCount: 5,
  });

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
          <Link href="/app/groups/join" color="inherit">
            Join
          </Link>
          <Typography color="textPrimary">
            <PrimaryColorParagraph>Link:</PrimaryColorParagraph> {slug}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Invitation from:{" "}
              <PrimaryColorParagraph>{group.name}</PrimaryColorParagraph>
            </Typography>
            <Typography variant="body1" component="p">
              Current member count:{" "}
              <PrimaryColorParagraph>{group.memberCount}</PrimaryColorParagraph>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" variant="contained" onClick={e => {
              router.push("/app/groups/" + group.name)
            }}>
              Accept
            </Button>
            <DangerButton
              size="small"
              variant="outlined"
              onClick={(e) => {
                router.push("/app/groups");
              }}
            >
              Decline
            </DangerButton>
          </CardActions>
        </Card>
      </Container>
    </DashboardWrapper>
  );
};

const PrimaryColorParagraph = styled.strong`
  ${({ theme }) => `
    color: ${theme.palette.primary.light};
  `}
`;

const DangerButton = styled(Button)`
  ${({ theme }) => `
  color: ${theme.palette.error.main} !important;
  border-color: ${theme.palette.error.main} !important;
`}
`;

export default JoinWithLinkPage;
