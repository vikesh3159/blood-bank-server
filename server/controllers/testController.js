/*export  es5* use kar rahe hai to direct export use nahi kar sakte hai*/
const testController=(req,res)=>{
     res.status(200).send({
        message:"test route",
        success:true,
     })
};

module.exports={testController};