export const getProgress=async(req,res)=>res.json({message:'progress controller ready'});
export const createProgress=async(req,res)=>res.status(201).json({message:'progress created',data:req.body});
export const updateProgress=async(req,res)=>res.json({message:'progress updated',id:req.params.id,data:req.body});
export const deleteProgress=async(req,res)=>res.json({message:'progress deleted',id:req.params.id});
