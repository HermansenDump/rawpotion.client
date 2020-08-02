import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../src/lib/slices/store";
import DashboardWrapper from "../../src/components/layouts/dashboard.wrapper";
import Profile from "../../src/components/Profile";
import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from "../../src/components/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { BreadcrumbsContainer } from "../../src/components/breadcrumbs.container";

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
