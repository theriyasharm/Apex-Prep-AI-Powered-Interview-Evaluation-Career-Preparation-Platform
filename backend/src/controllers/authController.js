export const getAuth=async(req,res)=>res.json({message:'auth controller ready'});
export const createAuth=async(req,res)=>res.status(201).json({message:'auth created',data:req.body});
export const updateAuth=async(req,res)=>res.json({message:'auth updated',id:req.params.id,data:req.body});
export const deleteAuth=async(req,res)=>res.json({message:'auth deleted',id:req.params.id});
