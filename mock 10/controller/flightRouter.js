const express = require("express");
const { FlightModel } = require("../model/flightModal");

const flightRouter = express.Router();
flightRouter.use(express.json());

flightRouter.get("/", async (req, res) => {
  try {
    const data = await FlightModel.find();
    console.log(data);
    res.sendStatus(data);
  } catch (err) {
    res.send("something went wrong ");
  }
});

//Post request
flightRouter.post("/add", async (req, res) => {
  try {
    let data = req.body;
    let book = new FlightModel(data);
    await book.save();
    res.send("new flight added");
    console.log(book);
  } catch (err) {
    res.send("something went wrong, data not added");
    console.log("err via posting");
  }
});

// Put request
flightRouter.put("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const books = await FlightModel.findByIdAndUpdate({ _id: id }, data);
    console.log(books);
    res.send(` Document with ${id} has been updated `);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

// Delete request
flightRouter.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = req.body;
    let notes = await FlightModel.findByIdAndDelete({ _id: id }, data);
    res.send(`id ${id} has been deleted from DataBase`);
    console.log(notes);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

// Patch Request
flightRouter.patch("/update/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    const notes = await FlightModel.findByIdAndUpdate({ _id: id }, data);
    console.log(notes);
    res.send(` Document with ${id} has been updated `);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

module.exports = { flightRouter };
