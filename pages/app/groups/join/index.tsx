import DashboardWrapper from "../../../../src/components/layouts/dashboard.wrapper";
import { BreadcrumbsContainer } from "../../../../src/components/breadcrumbs.container";
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "../../../../src/components/Link";
import React from "react";
import { useRouter } from "next/router";

const JoinPage = () => {
  const router = useRouter();
  const [link, setLink] = React.useState<string>("");

  const handleSubmit = (event) => {
    if (link) {
      router.push(`/app/groups/join/${link}`);
    }
  };

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
          <Typography color="textPrimary">Join</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Enter a link to join a group
            </Typography>
            <TextField
              fullWidth
              color="primary"
              label="Shared Link"
              variant="outlined"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Button
              disabled={!link}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Go
            </Button>
          </CardActions>
        </Card>
      </Container>
    </DashboardWrapper>
  );
};

export default JoinPage;
