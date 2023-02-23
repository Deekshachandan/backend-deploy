const express = require("express")
const { UserModel } = require("../model/userModel")


const userRouter = express.Router()
userRouter.use(express.json())


userRouter.get("/", (req, res) => {
    try {
        const data = UserModel.find()
        console.log(data)
        res.send("All users")
    }
    catch (err) {
        res.send({ "msg": "could not get details of user, something went wrong" })
    }
})



userRouter.post("/register", async(req, res) => {
    const data = req.body
    try { 
      const user = new UserModel(data)
                await user.save()
                console.log(user)
                res.send(user)
        }

           catch (err) {
        res.send(res.send({ "msg": "could not Signup, something went wrong" }))
    }

})





userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.find({ email,password })

      if (user.length > 0) {
          res.send("Login Successfull")
      } else {
        res.send("Wrong Credntials")
      }
  
    } catch (err) {
      console.log("Something went wrong");
      res.send("Could not Login");
    }
  })





module.exports = {
    userRouter
}