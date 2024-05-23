const updateprofielControler = async(req,res)=>{
const userbody = req.body;
const user = req.user;
return res.send({userbody, user});
}
export default updateprofielControler