import { Request, Response } from "express";
import User from "../db/models/user";
import Helper from "../helpers/Helper";
import PasswordHelper from "../helpers/PasswordHelper";

const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;

    const hashed = await PasswordHelper.PasswordHashing(password);

    if (password != confirmPassword) {
      return res
        .status(400)
        .send(Helper.ResponseData(400, "password not match", null, null));
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashed,
      active: true,
      verified: true,
      roleId: 1,
    });

    return res
      .status(201)
      .send(Helper.ResponseData(201, "Created Succesfully", null, user));
  } catch (error: any) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res
        .status(401)
        .send(Helper.ResponseData(401, "Unathorized", null, null));
    }

    const matched = await PasswordHelper.PasswordCompare(
      password,
      user.password
    );
    if (!matched) {
      return res
        .status(401)
        .send(Helper.ResponseData(401, "Unathorized", null, null));
    }

    const dataUser = {
      firstName: user.firstName,
      email: user.email,
      roleId: user.roleId,
      verified: user.verified,
      active: user.active,
    };
    const token = Helper.GenerateToken(dataUser);
    const refreshToken = Helper.GenerateRefreshToken(dataUser);

    user.accessToken = refreshToken;
    await user.save();

    const responseUser = {
      firstName: user.firstName,
      email: user.email,
      roleId: user.roleId,
      verified: user.verified,
      active: user.active,
      token: token,
      refreshToken: refreshToken,
    };

    return res
      .status(200)
      .send(Helper.ResponseData(200, "OK", null, responseUser));
  } catch (error: any) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

const RefreshToken = async (req: Request, res: Response): Promise<Response> => {
  try {
    const refreshToken = req.headers.token;

    if (!refreshToken) {
      return res
        .status(401)
        .send(Helper.ResponseData(401, "Unathorized", null, null));
    }

    const decodedUser = Helper.ExtractRefreshToken(refreshToken as string);
    if (!decodedUser) {
      return res
        .status(401)
        .send(Helper.ResponseData(401, "Unauthorized", null, null));
    }

    const getRefreshToken = Helper.GenerateRefreshToken({
      firstName: decodedUser.firstName,
      email: decodedUser.email,
      roleId: decodedUser.roleId,
      verified: decodedUser.verified,
      active: decodedUser.active,
    });

    const token = Helper.GenerateToken({
      firstName: decodedUser.firstName,
      email: decodedUser.email,
      roleId: decodedUser.roleId,
      verified: decodedUser.verified,
      active: decodedUser.active,
    });

    const resultUser = {
      firstName: decodedUser.firstName,
      email: decodedUser.email,
      roleId: decodedUser.roleId,
      verified: decodedUser.verified,
      active: decodedUser.active,
      token: token,
      refreshToken: getRefreshToken,
    };

    return res
      .status(200)
      .send(Helper.ResponseData(200, "OK", null, resultUser));
  } catch (error) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

const userDetail = async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = res.locals.userEmail;
    let user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res
        .status(404)
        .send(Helper.ResponseData(404, "User Not Found", null, null));
    }

    user.image = user.image
      ? `${req.protocol}://${req.get("host")}/uploads/${user.image}`
      : "";
    user.image2 = user.image2
      ? `${req.protocol}://${req.get("host")}/uploads/${user.image2}`
      : "";

    user.image3 = user.image3
      ? `${req.protocol}://${req.get("host")}/uploads/${user.image3}`
      : "";

    user.password = "";
    user.accessToken = "";

    return res.status(200).send(Helper.ResponseData(200, "OK", null, user));
  } catch (error) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

const userLogout = async (req: Request, res: Response): Promise<Response> => {
  try {
    const email = res.locals.userEmail;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.clearCookie("refreshToken");
      return res
        .status(200)
        .send(Helper.ResponseData(200, "User logout", null, null));
    }

    await user.update({ accessToken: null }, { where: { email: email } });
    return res
      .status(200)
      .send(Helper.ResponseData(200, "User logout", null, null));
  } catch (error) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

export default {
  registerUser,
  loginUser,
  RefreshToken,
  userDetail,
  userLogout,
};
