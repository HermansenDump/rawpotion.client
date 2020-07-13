import { makeAuthenticator, makeUserManager } from "react-oidc";
import { UserManagerSettings } from "oidc-client";
import React, { FC, useEffect } from "react";
import { AuthService } from "./lib/services/AuthService";
import { useRouter } from "next/router";

export interface Props {
  isCallback: boolean;
}

const LoginManager: FC<Props> = (props) => {
  const router = useRouter();
  const [isComponentMounted, setIsComponentMounted] = React.useState<boolean>(
    false
  );

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  if (!isComponentMounted) {
    return null;
  }
  const authService = new AuthService();

  if (props.isCallback) {
    authService.signinRedirectCallback().then(() => {
      router.push("/");
    });
  } else {
    authService.login();
  }

  return <div />;
};

export default LoginManager;
