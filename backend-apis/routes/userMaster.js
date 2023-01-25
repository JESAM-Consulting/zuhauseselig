const router = require("express").Router()
const userForm = require("../controllers/userForm")
const {validate} = require('../middlewares/validate')
const {auth} = require("../middlewares/auth")


router.post("/create", validate("body",userForm.createForm.validation), userForm.createForm.handler)
router.put("/update",auth, userForm.updateUserForm.handler)
router.get("/find", auth, userForm.getUserForm.handler)
router.delete("/delete", auth, userForm.deleteUserForm.handler)

module.exports = router