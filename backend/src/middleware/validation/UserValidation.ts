import Validator from "validatorjs";
import { Request, Response, NextFunction } from "express";
import Helpers from "../../helpers/Helper";
import User from "../../db/models/user";

const RegisterValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;

    const uploadedFiles = req.files;

    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    };

    const rules: Validator.Rules = {
      firstName: "required|string|max:50",
      lastName: "required|string",
      email: "required|email",
      phone: "required",
      password: "required|min:8",
      confirmPassword: "required|same:password",
    };

    const validate = new Validator(data, rules);

    if (validate.fails()) {
      return res
        .status(400)
        .send(Helpers.ResponseData(400, "Bad Request", validate.errors, null));
    }

    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) {
      const errorData = {
        errors: {
          email: ["Email already existed"],
        },
      };
      return res
        .status(400)
        .send(Helpers.ResponseData(400, "Bad Request", errorData, null));
    }

    next();
  } catch (error: any) {
    return res.status(500).send(Helpers.ResponseData(500, "", error, null));
  }
};

export default { RegisterValidation };
