import storage from "redux-persist/lib/storage";

export default {
  key: "auth",
  storage: storage,
  whitelist: ["user"],
};
