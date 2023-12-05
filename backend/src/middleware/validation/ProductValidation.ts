import Validator from "validatorjs";
import { Request, Response, NextFunction } from "express";
import Helpers from "../../helpers/Helper";
import Product from "../../db/models/product";

const ProductValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, category, description, information, star, price } = req.body;

    const uploadedFiles = req.files;

    const data = {
      title,
      category,
      description,
      information,
      star,
      price,
    };

    const rules: Validator.Rules = {
      title: "required|string|max:50",
      category: "required|string|max:25",
      description: "required|string|max:500",
      information: "required|string|max:250",
      star: "required|string|max:1",
      price: "required|string|max:50",
    };

    const validate = new Validator(data, rules);

    if (validate.fails()) {
      return res
        .status(400)
        .send(Helpers.ResponseData(400, "Bad Request", validate.errors, null));
    }

    if (!uploadedFiles || uploadedFiles.length === 0) {
      const errorData = {
        errors: {
          email: ["image is required"],
        },
      };

      return res
        .status(400)
        .send(Helpers.ResponseData(400, "Bad Request", errorData, null));
    }
    const product = await Product.findOne({
      where: {
        title: data.title,
      },
    });

    if (product) {
      const errorData = {
        errors: {
          email: ["Product already existed"],
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

export default { ProductValidation };
