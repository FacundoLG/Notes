// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateToken } from "../../utils/JWT";
import response from "../../utils/response";
export default async function singin(req, res) {
  switch (req.method) {
    case "POST":
      console.log(req.body);
      if (req.body.userData) {
        if (
          req.body.userData.username === "Facundo" &&
          req.body.userData.password === "123123"
        ) {
          await generateToken(req.body.userData)
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
        response.error(req, res, 400, "Bad Request");
      }
      break;
  }
}
