import React, { FC, useEffect, useState } from "react";
import { ProvideDefaultWrappers } from "./lib";
import DashboardWrapper from "./components/layouts/dashboard.wrapper";
import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState, useAppDispatch} from "./lib/state/store";
import { addUser } from "./lib/state/slices/user.slice";

const AuthValidProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  const storedUser = useSelector((state: RootState) => state.auth.user) ;
  const [token, setToken] = useState<string>("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    Axios.get("https://localhost:5001/api/session", {
      withCredentials: true,
    })
      .then((response) => {
        if (response.status === 200) {
          setToken(response.data.token);
          if (storedUser) {
            setIsAuthorized(true);
            console.log("user authorized")
          }
        } else {
          setIsAuthorized(false);
        }
      })
      .catch((error) => {
        if (error) {
          console.error(error);
        }
        setIsAuthorized(false);
      });
  }, [storedUser]);

  useEffect(() => {
    if (token && isAuthorized) {
      dispatch(addUser(token));
    }
  }, [dispatch, token, isAuthorized]);

  return <>{children}</>;
};

const App = () => (
  <div className="App">
    <ProvideDefaultWrappers>
      <AuthValidProvider>
        <DashboardWrapper>Some very wild content</DashboardWrapper>
      </AuthValidProvider>
    </ProvideDefaultWrappers>
  </div>
);

export default App;
