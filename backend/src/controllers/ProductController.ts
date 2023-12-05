import { Request, Response } from "express";
import Product from "../db/models/product";
import Helper from "../helpers/Helper";

type MulterFile = Express.Multer.File;

const getProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    let product = await Product.findAll({
      where: {
        active: true,
      },
      attributes: [
        "id",
        "title",
        "category",
        "description",
        "star",
        "image",
        "price",
      ],
    });

    const modifiedProducts = product.map((product: any) => {
      const modifiedProduct = product.get({ plain: true }); // Mengonversi Sequelize instance menjadi objek biasa

      return modifiedProduct;
    });

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: modifiedProducts,
    });
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error,
      });
    }

    return res.status(500).send({
      status: 500,
      message: "internal server error",
      errors: error,
    });
  }
};

const addProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const uploadedFiles = req.files as MulterFile[];

    const imagePaths: string[] = [];
    for (const [index, file] of uploadedFiles.entries()) {
      imagePaths.push(file.filename);
    }

    const { title, category, description, information, star, price } = req.body;

    const product = await Product.create({
      title,
      category,
      description,
      information,
      star,
      price,
      active: true,
      image: imagePaths[0]
        ? `${req.protocol}://${req.get("host")}/uploads/${imagePaths[0]}`
        : null,
      image2: imagePaths[1]
        ? `${req.protocol}://${req.get("host")}/uploads/${imagePaths[1]}`
        : null,
      image3: imagePaths[2]
        ? `${req.protocol}://${req.get("host")}/uploads/${imagePaths[2]}`
        : null,
    });

    return res
      .status(201)
      .send(Helper.ResponseData(201, "Created Succesfully", null, product));
  } catch (error: any) {
    return res.status(500).send(Helper.ResponseData(500, "", error, null));
  }
};

const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    let product = await Product.findByPk(id);

    //jika tidak ada id role nya maka dikasih handle
    if (!product) {
      return res.status(400).send({
        status: 404,
        message: `data not found `,
        data: null,
      });
    }

    //jika berhasil

    return res.status(200).send({
      status: 200,
      message: `succesfull get detail id ${id}`,
      data: product,
    });
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error,
      });
    }

    return res.status(500).send({
      status: 500,
      message: "internal server error",
      errors: error,
    });
  }
};

export default {
  addProduct,
  getProductById,
  getProduct,
};
