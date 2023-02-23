const mongoose=require("mongoose")


const bookSchema=mongoose.Schema({
    id: String,
    user : { type:String, ref: String },
    flight : { type: String, ref: String }
})


const BookModel=mongoose.model("bookdetails", bookSchema)


module.exports={
  BookModel
}