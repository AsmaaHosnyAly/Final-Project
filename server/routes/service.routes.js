const service = require("../controllers/service.controller")
const {auth, adminAuth} = require("../middleware/auth.middleware")
const router = require("express").Router()
router.post("/add",auth,service.addService)
router.get("/all",service.getAllService)
router.get("/singleEvent/:id",auth,service.getSingleService )
router.patch("/update/:id",auth,service.updateService)
router.delete("/delete/:id", auth,service.deleteService)
 router.get("/manyServices", auth, service.manyServices)
 router.get("/myServices", auth, service.myServices)
module.exports = router