const router = require("express").Router();
const Event = require("../model/eventModel");
const moment = require("moment")





//router.post("/", 
const createEvent = async (req, res) => {


    try {
        const data = req.body

        const createData = await Event.create(data)

        return res.status(200).send({ data: createData })
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ msg: error.message });
    }
}


//router.get("/", 
const getEvent = async(req, res)=>{
    try{
        const data = await Event.find({isDeleted: false});
 
     return res.status(200).send({ data: data })
    }catch (error) {
        return res.status(500).send({ msg: error.message });
      }
};

//router.get("/:id/show", 
const getByid = async(req, res)=>{
    try{
        const id =   req.params.id
        const event = await Event.findById(id);
       res.status(200).json(event)

      
    }catch (error) {
        return res.status(500).send({ msg: error.message });
      }
};




//router.put("/:id/update", 
const updateEvent= async (req, res)=>{
    
     try{
        const id = req.params.id
        const event = await Event.findOne({_id : id})
        if(event){
            Object.assign(event, req.body);
             event.save((err, event)=>{
                if(err){
                    handleError(err, res)
                }else{
                    res.status(200).json(event)
                }
        })
    }   
        if(!event){
            res.status(404).json({error: "event is not found"})
        }
     }catch (error) {
        return res.status(500).send({ msg: error.message });
      }
 }

//router.delete("/:id/delete",
// const deleteEvent = async(req, res)=>{

//     try{
//         const id = req.params.id;
//         await Event.findByIdAndRemove(id)
//         res.status(200).json("Event has been deleted");
//     }catch (error) {
//         return res.status(500).send({ msg: error.message });
//       }

// }
const deleteEvent = async (req, res) => {
    try {
      const id = req.params.id;
      await Event.findOneAndUpdate(
        { _id: id, isDeleted: false },
        { $set: { isDeleted: true } },
        { new: true }
      );//(id, { isDelete: true });
      res.status(200).json('Event has been marked as deleted');
    } catch (error) {
      return res.status(500).send({ msg: error.message });
    }
  };

//   try {
//     let productId = req.params.productId;
//     if (!validation.isValidObjectId(productId)) {
//       return res
//         .status(400)
//         .send({ status: false, msg: "Please Provide Valid Project ID" });
//     }
//     let alreadyDeleted = await ProductsModel.findOne({
//       _id: productId,
//     });
//     if(alreadyDeleted == null)
//     {
//       return res
//       .status(404)
//       .send({ status: false, msg: "this productId is not exist in Database" });
//     }
//     if (alreadyDeleted['isDeleted'] == true) {
//       return res
//         .status(404)
//         .send({ status: false, msg: "this product is already deleted" });
//     }
//     let data = await ProductsModel.findOneAndUpdate(
//       { _id: productId, isDeleted: false },
//       { $set: { isDeleted: true } },
//       { new: true }
//     );
//     return res
//       .status(200)
//       .send({ status: true, data: "product deleted Succesfully" });
  






module.exports ={createEvent, getByid, getEvent,updateEvent, deleteEvent}