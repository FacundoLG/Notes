import usersRoute from "./components/user/network.js";
const routes = (app) => {
  app.use("/user", usersRoute);
};

export default routes;
