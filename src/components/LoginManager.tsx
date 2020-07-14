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
      dispatch(addUser());
      router.push("/app");
    });
  } else {
    authService.login();
  }

  return <div />;
};

export default LoginManager;
