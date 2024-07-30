import express from "express";
import bodyParser from "body-parser";

import db from "./mongoC.js";
// backend running in port 400
const port = 4000;
const app = express();

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());
// get user
// app.get("/", (req, res) => {
//   res.send("Hello World, from express");
// });
//create user
// app.post("/addUser", async (req, res) => {
//   let collection = await db.collection("users");
//   let newDocument = req.body;
//   newDocument.date = new Date();
//   let result = await collection.insertOne(newDocument);
//   console.log("rreq" + req.body);
//   res.send(result).status(204);
// });
//read users
// app.get("/getUsers", async (req, res) => {
//   let collection = await db.collection("users");
//   let results = await collection
// .find({})
//
// .toArray();
//   res.send(results).status(200);
// });
//
// Get user
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

//Create user
app.post("/addUser", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    console.log("Request body:", req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

// Read users
app.get("/getUsers", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error reading users");
  }
});

// Update user
app.put("/updateUser/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let userId = req.params.id;
    let updatedDocument = req.body;
    let result = await collection.updateOne(
      { _id: new MongoClient.ObjectID(userId) },
      { $set: updatedDocument }
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
});

// Delete user
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let userId = req.params.id;
    let result = await collection.deleteOne({
      _id: new MongoClient.ObjectID(userId),
    });
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});

// Sort users
app.get("/sortUsers/:field", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let field = req.params.field;
    let results = await collection
      .find({})
      .sort({ [field]: 1 })
      .toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sorting users");
  }
});
// Get user
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

// Create user
app.post("/addUser", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    console.log("Request body:", req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

// Read users
app.get("/getUsers", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error reading users");
  }
});

// Update user
app.put("/updateUser/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let userId = req.params.id;
    let updatedDocument = req.body;
    let result = await collection.updateOne(
      { _id: new MongoClient.ObjectID(userId) },
      { $set: updatedDocument }
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
});

// Delete user
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let userId = req.params.id;
    let result = await collection.deleteOne({
      _id: new MongoClient.ObjectID(userId),
    });
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});

// Sort users
app.get("/sortUsers/:field", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let field = req.params.field;
    let results = await collection
      .find({})
      .sort({ [field]: 1 })
      .toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sorting users");
  }
});
// Get user
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

// Create user
app.post("/addUser", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    console.log("Request body:", req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

// Read users
app.get("/getUsers", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error reading users");
  }
});

// Update user
app.put("/updateUser/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let userId = req.params.id;
    let updatedDocument = req.body;
    let result = await collection.updateOne(
      { _id: new MongoClient.ObjectID(userId) },
      { $set: updatedDocument }
    );
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
});

// Delete user
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let userId = req.params.id;
    let result = await collection.deleteOne({
      _id: new MongoClient.ObjectID(userId),
    });
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});

// Sort users
app.get("/sortUsers/:field", async (req, res) => {
  try {
    let collection = await db.collection("users");
    let field = req.params.field;
    let results = await collection
      .find({})
      .sort({ [field]: 1 })
      .toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sorting users");
  }
});

app.listen(port, function () {
  console.log("Server is listening at port:" + port);
});
