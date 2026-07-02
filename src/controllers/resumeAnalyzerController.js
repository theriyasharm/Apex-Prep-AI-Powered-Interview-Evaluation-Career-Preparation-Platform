export const getResumeAnalyzer=async(req,res)=>res.json({message:'resumeAnalyzer controller ready'});
export const createResumeAnalyzer=async(req,res)=>res.status(201).json({message:'resumeAnalyzer created',data:req.body});
export const updateResumeAnalyzer=async(req,res)=>res.json({message:'resumeAnalyzer updated',id:req.params.id,data:req.body});
export const deleteResumeAnalyzer=async(req,res)=>res.json({message:'resumeAnalyzer deleted',id:req.params.id});
