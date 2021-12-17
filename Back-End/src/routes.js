import usersRoute from "./components/user/network.js";
import notesRoute from "./components/notes/network.js";
const routes = (app) => {
  app.use("/user", usersRoute);
  app.use("/note", notesRoute);
};

export default routes;
