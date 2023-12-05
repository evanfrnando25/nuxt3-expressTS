import { Request, Response } from "express";
import Role from "../db/models/role";

const getRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const roles = await Role.findAll({
      where: {
        active: true,
      },
    });

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: roles,
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

const createRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { roleName, active } = req.body;

    const create = await Role.create({
      roleName,
      active,
    });

    return res.status(201).send({
      status: 201,
      message: "created",
      data: create,
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

const updateRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { roleName, active } = req.body;

    const role = await Role.findByPk(id);

    //jika tidak ada rle
    if (!role) {
      return res.status(400).send({
        status: 400,
        message: "Data Not Found",
        data: null,
      });
    }

    role.roleName = roleName;
    role.active = active;
    await role.save();

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: role,
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

const deleteRole = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const role = await Role.findByPk(id);

    if (!role) {
      return res.status(400).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await role.destroy();

    return res.status(200).send({
      status: 200,
      message: "Deleted",
      data: null,
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

const getRoleById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const role = await Role.findByPk(id);

    if (!role) {
      return res.status(400).send({
        status: 404,
        message: `data not found `,
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: `succesfull get detail id ${id}`,
      data: role,
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

export default { getRole, createRole, updateRole, deleteRole, getRoleById };
