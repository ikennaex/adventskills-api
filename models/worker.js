const mongoose = require("mongoose")
const {Schema} = mongoose

const workerSchema = new Schema ({
    name: {type: String, required: true},
    dob: {type: String, required: true}, 
    gender: {type: String, required: true}, 
    stateoforigin: {type: String, required: true},    
    lga: {type: String, required: true}, 
    religion: {type: String, required: true}, 
    maritalstatus: {type: String, required: true},  
    noofchildren: {type: String}, 
    address: {type: String, required: true}, 
    stateofresidence: {type: String, required: true}, 
    phonenumber: {type: String, required: true}, 
    nextofkin: {type: String, required: true}, 
    nextofkinphonenumber: {type: String, required: true}, 
    role: {type: String, required: true}, 
    livein: {type: String, required: true}, 
    relocate: {type: String, required: true}, 
    schedule: {type: String, required: true}, 
    experience: {type: String, required: true}, 
    education: {type: String, required: true}, 
    nameofschool: {type: String, required: true}, 
    yearcompleted: {type: String, required: true}, 
    previousemployer: {type: String, required: true}, 
    previousemployeraddress: {type: String, required: true}, 
    previousemployerphonenumber: {type: String, required: true}, 
    approved: {type: Boolean, default: false}
})

const workermodel = mongoose.model("worker", workerSchema)
module.exports = workermodel