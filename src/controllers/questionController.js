export const getQuestion=async(req,res)=>res.json({message:'question controller ready'});
export const createQuestion=async(req,res)=>res.status(201).json({message:'question created',data:req.body});
export const updateQuestion=async(req,res)=>res.json({message:'question updated',id:req.params.id,data:req.body});
export const deleteQuestion=async(req,res)=>res.json({message:'question deleted',id:req.params.id});
