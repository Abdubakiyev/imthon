import { userModel } from "../models/UserModel.js";
import sha256 from "sha256";
import jwt from "../utils/jwt.js";
import { NotFoundError } from "../utils/error.js";

export class UserService {
  static generateToken(dataToken) {
    return {
      accessToken: jwt.sign(dataToken),
      refreshToken: jwt.signRef(dataToken),
    };
  }

  static async registerUser(payload, dataToken) {
    if (!payload.password) {
      throw new Error("Parol kiritilmadi");
    }

    const hashedPassword = sha256(payload.password);

    const newUser = await userModel.create({
      ...payload,
      password: hashedPassword,
    });

    dataToken.user_id = newUser._id;
    dataToken.role = newUser.role;
    dataToken.userIp = dataToken.userIp || null;
    dataToken.userAgent = dataToken.userAgent || null;

    return this.generateToken(dataToken);
  }

  static async loginUser(payload, dataToken) {
    const user = await userModel.findOne({
      username: payload.username,
      password: sha256(payload.password),
    });

    if (!user) throw new NotFoundError(404, "Foydalanuvchi topilmadi");

    dataToken.user_id = user._id;
    dataToken.role = user.role;
    dataToken.userIp = dataToken.userIp || null;
    dataToken.userAgent = dataToken.userAgent || null;

    return this.generateToken(dataToken);
  }
}
