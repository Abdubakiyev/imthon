import { UserService } from "../servise/UserServise.js";

class UserController {
    async UserRegister(req, res, next) {
        try {
          console.log("REQ.BODY:", req.body);
      
          const dataToken = {
            userIp: req.ip,
            userAgent: req.headers["user-agent"],
          };
      
          const user = await UserService.registerUser(req.body, dataToken);
      
          res.status(201).json(user);
        } catch (error) {
          next(error);
        }
      }
      

  async UserLogin(req, res, next) {
    try {
      const dataToken = {
        userIp: req.ip,
        userAgent: req.headers["user-agent"],
      };
      const tokens = await UserService.loginUser(req.body, dataToken);
      res.status(200).json(tokens);
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
