const router = require("express").Router()
const userForm = require("../controllers/userForm")
const {validate} = require('../middlewares/validate')
const {auth} = require("../middlewares/auth")


router.post("/lead", validate("body",userForm.createForm.validation), userForm.createForm.handler)
router.put("/update_lead",auth, userForm.updateUserForm.handler)
router.get("/qualified_lead", auth, userForm.getUserForm.handler)
router.delete("/delete_lead", auth, userForm.deleteUserForm.handler)

module.exports = router