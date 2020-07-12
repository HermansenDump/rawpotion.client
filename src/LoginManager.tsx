import { makeAuthenticator, makeUserManager } from "react-oidc";
import { UserManagerSettings } from "oidc-client";

const userManagerConfig: UserManagerSettings = {
  authority: "https://localhost:5002",
  client_id: "rawpotion.client",
  redirect_uri: "http://localhost:3000/identity/login/callback",
  response_type: "code",
  scope: "openid profile",
};

const LoginManager = (props) => {
  return props.children;
};

export default LoginManager;
