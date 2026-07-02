export const getUser=async(req,res)=>res.json({message:'user controller ready'});
export const createUser=async(req,res)=>res.status(201).json({message:'user created',data:req.body});
export const updateUser=async(req,res)=>res.json({message:'user updated',id:req.params.id,data:req.body});
export const deleteUser=async(req,res)=>res.json({message:'user deleted',id:req.params.id});
