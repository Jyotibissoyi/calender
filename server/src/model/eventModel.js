const moment = require("moment");
const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please write a title for your event"]},
    isDeleted: { type: Boolean, default: false },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    start: {
     type: Date,
     required: [true, "Please Insert The Start of your event" ],
     min: [new Date(), "can't be before now!!"],
    },
    end: {
     type: Date,
    },describe: { type: String},
})


module.exports = mongoose.model("Event", EventSchema)