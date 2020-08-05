import { BreadcrumbsContainer } from "../../components/breadcrumbs.container";
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DashboardWrapper from "../../components/layouts/dashboard.wrapper";
import React from "react";

const CreateGroupPage = () => {
  const [groupName, setGroupName] = React.useState("");

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
          <Typography color="textPrimary">Create</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Create Group
            </Typography>
            <TextField
              label="Name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              variant="outlined"
              color="primary"
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={(e) => {
                //router.push("/app/groups/" + groupName);
              }}
            >
              Create
            </Button>
          </CardActions>
        </Card>
      </Container>
    </DashboardWrapper>
  );
};

export default CreateGroupPage;
