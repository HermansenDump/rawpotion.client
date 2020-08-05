import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../lib/state/store";
import DashboardWrapper from "../components/layouts/dashboard.wrapper";
import Profile from "../components/Profile";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { BreadcrumbsContainer } from "../components/breadcrumbs.container";

const ProfilePage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <DashboardWrapper>
      <BreadcrumbsContainer>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link href="/app" color="inherit">
            App
          </Link>
          <Typography color="textPrimary">Profile</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      {user && <Profile user={user} />}
    </DashboardWrapper>
  );
};

export default ProfilePage;
