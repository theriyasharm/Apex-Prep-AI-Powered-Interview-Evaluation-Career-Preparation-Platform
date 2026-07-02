export const getInterview=async(req,res)=>res.json({message:'interview controller ready'});
export const createInterview=async(req,res)=>res.status(201).json({message:'interview created',data:req.body});
export const updateInterview=async(req,res)=>res.json({message:'interview updated',id:req.params.id,data:req.body});
export const deleteInterview=async(req,res)=>res.json({message:'interview deleted',id:req.params.id});
