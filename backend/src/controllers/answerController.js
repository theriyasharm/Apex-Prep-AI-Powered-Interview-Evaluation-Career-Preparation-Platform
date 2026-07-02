export const getAnswer=async(req,res)=>res.json({message:'answer controller ready'});
export const createAnswer=async(req,res)=>res.status(201).json({message:'answer created',data:req.body});
export const updateAnswer=async(req,res)=>res.json({message:'answer updated',id:req.params.id,data:req.body});
export const deleteAnswer=async(req,res)=>res.json({message:'answer deleted',id:req.params.id});
