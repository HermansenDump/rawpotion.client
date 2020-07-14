import { useEffect, useState } from "react";
import { AuthService } from "../lib/services/AuthService";

const User = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [authService, setAuthService] = useState(null);

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

  return <div>{JSON.stringify(user)}</div>;
};

export default User;
