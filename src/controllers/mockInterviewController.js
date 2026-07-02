export const getMockInterview=async(req,res)=>res.json({message:'mockInterview controller ready'});
export const createMockInterview=async(req,res)=>res.status(201).json({message:'mockInterview created',data:req.body});
export const updateMockInterview=async(req,res)=>res.json({message:'mockInterview updated',id:req.params.id,data:req.body});
export const deleteMockInterview=async(req,res)=>res.json({message:'mockInterview deleted',id:req.params.id});
