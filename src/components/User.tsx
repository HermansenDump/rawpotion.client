import { useEffect, useState } from "react";
import { AuthService } from "../lib/services/AuthService";
import { User as OidcUser } from "oidc-client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../lib/slices/store";
import { addUser } from "../lib/slices/user.slice";

const User = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [authService, setAuthService] = useState(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => setIsMounted(true), []);
  useEffect(() => {
    if (isMounted) {
      setAuthService(new AuthService());
    }
  }, [isMounted]);
  useEffect(() => {
    if (authService) {
      authService.getUser().then((u) => {
        if (u) {
          setUser(u);
        }
      });
    }
  }, [authService]);

  if (!isMounted) {
    return null;
  }

  if (!user) {
    return null;
  }

  return props.children;
};

export default User;
