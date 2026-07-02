export const getAssessment=async(req,res)=>res.json({message:'assessment controller ready'});
export const createAssessment=async(req,res)=>res.status(201).json({message:'assessment created',data:req.body});
export const updateAssessment=async(req,res)=>res.json({message:'assessment updated',id:req.params.id,data:req.body});
export const deleteAssessment=async(req,res)=>res.json({message:'assessment deleted',id:req.params.id});
