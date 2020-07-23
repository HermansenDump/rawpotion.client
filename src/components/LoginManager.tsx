import React, { FC, useEffect } from "react";
import { AuthService } from "../lib/services/AuthService";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addUser } from "../lib/slices/user.slice";

export interface Props {
  isCallback: boolean;
}

const LoginManager: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [authService, setAuthService] = React.useState<AuthService>()
  const [isComponentMounted, setIsComponentMounted] = React.useState<boolean>(
    false
  );

  useEffect(() => {
    setIsComponentMounted(true);

    if (!authService) {
      setAuthService(new AuthService());
    }
  }, []);

  if (!isComponentMounted) {
    return null;
  }

  if (!props.isCallback) {
    authService.login();
  } else {
    authService.signinRedirectCallback().then(() => {
      authService.getUser().then((user) => {
        dispatch(addUser(user));
        router.push("/app");
      });
    });
  }

  return <div />;
};

export default LoginManager;
