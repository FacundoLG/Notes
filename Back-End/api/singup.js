// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const userControler = require("../../components/user/controler");
const response = require("../../utils/response");
export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      // userControler
      //   .SingUpUser(req.body.userData)
      //   .then((result) => {
      //     response.success(req, res, 200, result.message);
      //   })
      //   .catch((result) => {
      //     response.error(req, res, 400, result.message);
      //   });
      console.log("hi");
      break;
  }
}
