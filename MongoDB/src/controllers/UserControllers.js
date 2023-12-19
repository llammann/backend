const postUser=async((req,res)=>{
    console.log(req.body)
})

const getAllUsers=async((req,res)=>{
    console.log("all data")
})

module.exports={postUser,getAllUsers}