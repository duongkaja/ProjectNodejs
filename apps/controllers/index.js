var express = require("express");
var router = express.Router();
// router.use("/home", require(__dirname + "/homecontroller"));
// router.use("/product", require(__dirname + "/productcontroller"));
router.get("/", function(req,res){
    // res.json({"message": "this is index page"});
    res.render("index");
});;
module.exports = router;
