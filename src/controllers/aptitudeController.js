export const getAptitude=async(req,res)=>res.json({message:'aptitude controller ready'});
export const createAptitude=async(req,res)=>res.status(201).json({message:'aptitude created',data:req.body});
export const updateAptitude=async(req,res)=>res.json({message:'aptitude updated',id:req.params.id,data:req.body});
export const deleteAptitude=async(req,res)=>res.json({message:'aptitude deleted',id:req.params.id});
