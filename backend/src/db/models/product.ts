import { DataTypes, Model, Optional } from "sequelize";

import connection from "../../config/dbConnect";

interface ProductAttributes {
  id?: number;
  title?: string | null;
  category?: string | null;
  description?: string | null;
  information?: string | null;
  star?: string | null;
  price?: string | null;
  image?: string | null;
  image2?: string | null;
  image3?: string | null;
  active: boolean | null;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInput extends Optional<ProductAttributes, "id"> {}
export interface ProductOutput extends Required<ProductAttributes> {}

class Product
  extends Model<ProductAttributes, ProductInput>
  implements ProductAttributes
{
  public id!: number;
  public title!: string | null;
  public category!: string | null;
  public description!: string | null;
  public information!: string | null;
  public star!: string | null;
  public price!: string | null;
  public image!: string | null;
  public image2!: string | null;
  public image3!: string | null;
  public active!: boolean | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    information: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    star: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
  }
);

export default Product;
