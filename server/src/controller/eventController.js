const router = require("express").Router();
const Event = require("../model/eventModel");
const moment = require("moment")





//router.post("/", 
const createEvent = async(req, res)=>{
     
    try{
       const newEvent = await new Event(req.body)
       await newEvent.save((err, event)=>{
            if(err){
                handleError(err, res)
            }else{
                res.status(200).json(event)
            }
        })
    }catch (error) {
        return res.status(500).send({ msg: error.message });
      }
}



//router.get("/", 
const getEvent = async(req, res)=>{
    try{
        const events = await Event.find({
            start:{$gte: moment(req.query.start).toDate()},
            start:{$lte: moment(req.query.start).toDate()}
     });
 
       res.status(200).json(events)

      
    }catch(err){
        handleError(err, res)
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
const deleteEvent = async(req, res)=>{

    try{
        const id = req.params.id;
        await Event.findByIdAndRemove(id)
        res.status(200).json("Event has been deleted");
    }catch (error) {
        return res.status(500).send({ msg: error.message });
      }

}






module.exports ={createEvent, getByid, getEvent,updateEvent, deleteEvent}