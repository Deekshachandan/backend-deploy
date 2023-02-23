const mongoose=require("mongoose")


const flightSchema=mongoose.Schema({
    id: String,
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: String,
    arrivalTime: String,
    seats: Number,
    price: Number
})


const FlightModel=mongoose.model("flight", flightSchema)


module.exports={
 FlightModel
}