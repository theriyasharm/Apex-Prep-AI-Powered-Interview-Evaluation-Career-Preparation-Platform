export const getNotification=async(req,res)=>res.json({message:'notification controller ready'});
export const createNotification=async(req,res)=>res.status(201).json({message:'notification created',data:req.body});
export const updateNotification=async(req,res)=>res.json({message:'notification updated',id:req.params.id,data:req.body});
export const deleteNotification=async(req,res)=>res.json({message:'notification deleted',id:req.params.id});
