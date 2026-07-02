export const getDashboard=async(req,res)=>res.json({message:'dashboard controller ready'});
export const createDashboard=async(req,res)=>res.status(201).json({message:'dashboard created',data:req.body});
export const updateDashboard=async(req,res)=>res.json({message:'dashboard updated',id:req.params.id,data:req.body});
export const deleteDashboard=async(req,res)=>res.json({message:'dashboard deleted',id:req.params.id});
