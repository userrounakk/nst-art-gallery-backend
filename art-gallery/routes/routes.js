const { Router } = require("express");
const router = Router();

const auth = require("./auth.routes");
const theme = require("./theme.routes");

router.use("/auth", auth);
router.use("/theme", theme);

module.exports = router;
