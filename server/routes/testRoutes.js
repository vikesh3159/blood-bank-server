const express=require("express");
//testController nam ka callback import hua hai
const { testController } = require("../controllers/testController");

//router object me router ki sari functionlity aa jayega
const router=express.Router();

router.get("/",testController)

//jitne bhi router create karenge usko router export kar dega
module.exports=router;
//es5 hai to module use kar rahe hai
