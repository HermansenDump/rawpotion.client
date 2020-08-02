import { User } from "oidc-client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";

interface Props {
  user: User;
}

const Profile: React.FC<Props> = ({ user }) => (
  <Container maxWidth="sm">
    <Card>
      {user.profile.picture && (
        <CardMedia image={user.profile.picture} title="Profile picture" />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {user.profile.name}
        </Typography>
        <Typography variant="h6" component="h3">
          {user.profile.email}
        </Typography>
        <Typography variant="body1" component="p">
          {user.profile.address}
        </Typography>
      </CardContent>
    </Card>
  </Container>
);

export default Profile;
