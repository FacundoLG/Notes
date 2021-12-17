import usersRoute from "./components/user/network.js";
import notesRoute from "./components/notes/network.js";
import { verifyToken } from "./lib/JWT.js";
const routes = (app) => {
  app.use("/user", usersRoute);
  app.use("/note", verifyToken, notesRoute);
};

export default routes;
