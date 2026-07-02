export const getResume=async(req,res)=>res.json({message:'resume controller ready'});
export const createResume=async(req,res)=>res.status(201).json({message:'resume created',data:req.body});
export const updateResume=async(req,res)=>res.json({message:'resume updated',id:req.params.id,data:req.body});
export const deleteResume=async(req,res)=>res.json({message:'resume deleted',id:req.params.id});
