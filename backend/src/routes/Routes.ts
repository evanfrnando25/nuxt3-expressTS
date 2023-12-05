import express from "express";
import RoleController from "../controllers/RoleController";
import UserController from "../controllers/UserController";
import ProductController from "../controllers/ProductController";
import UserValidation from "../middleware/validation/UserValidation";
import Authorization from "../middleware/Authorization";
import multer from "multer";
import path from "path";
import ProductValidation from "../middleware/validation/ProductValidation";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../../uploads");
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

router.get("/role", Authorization.Authenticated, RoleController.getRole);
router.post("/role", RoleController.createRole);
router.patch("/role/:id", RoleController.updateRole);
router.delete("/role/:id", RoleController.deleteRole);
router.get("/role/:id", RoleController.getRoleById);

//user routing
router.post(
  "/user/signup",
  UserValidation.RegisterValidation,
  UserController.registerUser
);
router.post("/user/login", UserController.loginUser);
router.get("/user/refreshToken", UserController.RefreshToken);
router.get(
  "/user/currentUser",
  Authorization.Authenticated,
  UserController.userDetail
);
router.get(
  "/user/logout",
  Authorization.Authenticated,
  UserController.userLogout
);

router.post(
  "/product",
  upload.array("files", 3),
  ProductValidation.ProductValidation,
  ProductController.addProduct
);

router.get("/product/:id", ProductController.getProductById);
router.get("/product", ProductController.getProduct);

export default router;
