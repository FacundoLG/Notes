// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateToken } from "../../utils/JWT";
import response from "../../utils/response";
export default function handler(req, res) {
  if (req.userData) {
    if (
      req.userData.username === "Facundo" &&
      req.userData.password === "123123"
    ) {
      generateToken(userData)
        .then((data) => {
          response.success(req, res, 200, data.data);
        })
        .catch((data) => {
          response.error(req, res, 500, data.message);
        });
    } else {
      response.error(req, res, 401, "Incorrect username or password");
    }
  } else {
    response.error(req, res, 400, "Please fill the camps");
  }
}
