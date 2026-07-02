export const getFeedback=async(req,res)=>res.json({message:'feedback controller ready'});
export const createFeedback=async(req,res)=>res.status(201).json({message:'feedback created',data:req.body});
export const updateFeedback=async(req,res)=>res.json({message:'feedback updated',id:req.params.id,data:req.body});
export const deleteFeedback=async(req,res)=>res.json({message:'feedback deleted',id:req.params.id});
