const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  console.log(req.body);
  console.log("reached backend");
  const { name, phone, sponsor, meeting } = req.body;
  try {
    const newContact = new Contact({
      name,
      phone,
      sponsor,
      meeting
    });
    const addContact = await newContact.save();
    res.send(addContact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("failed at Post backend");
  }
});
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("GET all contacts failed");
  }
});

module.exports = router;
