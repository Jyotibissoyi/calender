const express = require('express')
const router = express.Router()
//------------------------------<import file>------------------------------------//
const {createUser,logInUserData,getUserData } = require("../controller/userController");

const{createEvent, getByid, getEvent,updateEvent, deleteEvent}= require("../controller/eventController")



//---------------------------------< Routes >----------------------------------//

router.post("/register", createUser);
router.post("/login", logInUserData);
// router.get("/user/:userId/profile", authentication,authorization,checkuserId, getUserData);


 
router.post("/create", createEvent )
router.get("/getevent", getEvent )
// router.get("/getevent/:id",authentication,authorization,checkuserId, getByid)
// router.put("/update/:id",authentication,authorization,checkuserId, updateEvent) 
// router.delete("/delete/:id",authentication,authorization,checkuserId, deleteEvent)




module.exports = router