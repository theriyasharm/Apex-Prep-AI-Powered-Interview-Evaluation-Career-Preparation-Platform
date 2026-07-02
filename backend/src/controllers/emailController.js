export const getEmail=async(req,res)=>res.json({message:'email controller ready'});
export const createEmail=async(req,res)=>res.status(201).json({message:'email created',data:req.body});
export const updateEmail=async(req,res)=>res.json({message:'email updated',id:req.params.id,data:req.body});
export const deleteEmail=async(req,res)=>res.json({message:'email deleted',id:req.params.id});
