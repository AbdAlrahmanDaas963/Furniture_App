const router = require("express").Router();
const productController = require("../controllers/productsController");

router.get("/:id", productController.getProduct);
router.get("/search/:key", productController.searchProdcut);
router.get("/", productController.getAllProduct);
router.post("/", productController.createProduct);

module.exports = router;
