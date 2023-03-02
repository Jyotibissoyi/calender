//<----------------------< Importing : Packages >---------------------->//
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");





//<----------------------< Create : UserFunction >--------------------->//
const createUser = async function (req, res) {
  try {
      let data = req.body
   
      //--------------------------Destructuring user data------------------------------------//
      let { name, email,  phone, password } = data
      //---------------------------Body can't be empty-------------------------------------//
      //----------------------------------Encrypt the password by bcrypt-------------------------------//
      bcrypt.hash(password, 10, function (error, result) {
          if (error) return res.status(400).send({ status: false, message: error.message })
          else { data.password = result }
      })
      //---------Fetching data of email from db checking duplicate email or phone is present or not------------//
      const isDuplicateEmail = await userModel.findOne({ $or: [{ email: email }, { phone: phone }] })
      if (isDuplicateEmail) {
          if (isDuplicateEmail.email == email) { return res.status(400).send({ status: false, message: `this emailId:${email} is already exist` }) }
          if (isDuplicateEmail.phone == phone) { return res.status(400).send({ status: false, message: `this phone:${phone} is already exist` }) }
      }

   let userCreated = await userModel.create(data)
      return res.status(201).send({ status: true, message: "Data created succsesfully", data: userCreated })
  }
  catch (error) {
      return res.status(500).send({ status: false, message: error.message })
  }
}

//------------------------------------------------------------Login Api-------------------------------------------------------------------------------

const loginUser = async function (req, res) {
  try {
      let { email, password } = req.body;

      if (Object.keys(req.body).length === 0) {
          return res.status(400).send({ status: false, message: "please input user Details" });
      }

      if (!email) {
          return res.status(400).send({ status: false, message: "EmailId is mandatory", });
      }
      let verifyUser = await userModel.findOne({ email: email });
      if (!verifyUser) return res.status(400).send({ status: false, message: "Invalid Login Credential" });

      //-------------------------------------------Decrypt the password and compare the password with user input------------------------------------------//
      bcrypt.compare(password, verifyUser.password, function (error, verifyUser) {
          if (error) return res.status(400).send({ status: false, message: error.message })
        else verifyUser == true
      });


      let payload = { userId: verifyUser["_id"], iat: Date.now(), };


      let token = jwt.sign(payload, "Group18", { expiresIn: "24h" });

      res.setHeader("CALENDER", token);
      res.status(200).send({ status: true, message: "User login successfull", data: { userId: verifyUser["_id"], token } });
  } catch (error) {
      res.status(500).send({ status: false, message: error.message, });
  }
};
//-----------------------------------------------------------------Get User Api--------------------------------------------------------------------------

const getUser = async function(req, res)  {

  try {
      let userId= req.params.userId
      let tokenUserId = req.decode.userId
     
     if (!userId) { return res.status(400).send({ status: false, message: "User id is required in params" }) }
      //------------------------userId matches from the token for authorization purpose-------------------------------//
      if(userId!==tokenUserId){return res.status(403).send({status:false,message:"you are not authorized user"})}
      const getData = await userModel.findById({ _id: userId });

      if (!getData) { return res.status(404).send({ status: false, message: "User id is not present in DB" }) }

      return res.status(200).send({ status: true, message: "User profile details", data: getData })

  } catch (error) {
      return res.status(500).send({ status: false, Message: error.Message })
  }

}

//-------------------------------------------------------Update User Api----------------------------------------------------------------------------


module.exports = { createUser, loginUser, getUser }