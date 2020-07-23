import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../src/lib/slices/store";
import DashboardWrapper from "../../src/components/layouts/dashboard.wrapper";
import Profile from "../../src/components/Profile";
import {Breadcrumbs, Container, Typography} from "@material-ui/core";
import Link from "../../src/components/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const ProfilePage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <DashboardWrapper>
      <Container maxWidth="md">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link href="/app" color="inherit">
            App
          </Link>
          <Typography color="textPrimary">
            Profile
          </Typography>
        </Breadcrumbs>
      </Container>
      {user && <Profile user={user} />}
    </DashboardWrapper>
  );
};

export default ProfilePage;
