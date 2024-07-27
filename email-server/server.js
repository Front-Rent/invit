const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/formDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  username: String,
  phoneNumber: { type: String, unique: true },
  guests: Number,
  dateSubmitted: { type: Date, default: Date.now },
});

const Form = mongoose.model("Form", formSchema);

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rparonyan00@gmail.com",
    pass: "hczo tvbt piwk azwz",
  },
});

app.post("/submit-form", async (req, res) => {
  const { username, phoneNumber, guests } = req.body;

  try {
    const existingForm = await Form.findOne({ phoneNumber });

    if (existingForm) {
      return res.status(400).send("Этот номер телефона уже используется.");
    }

    const newForm = new Form({
      username,
      phoneNumber,
      guests,
    });

    await newForm.save();

    const mailOptions = {
      from: "rparonyan00@gmail.com",
      to: "romaparonyan14@gmail.com",
      subject: `Դուք ունեք ևս ${guests} հյուրեր։`,
      text: `Name: ${username}\nPhone: ${phoneNumber}\nGuests: ${guests}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send("Email sent: " + info.response);
    });
  } catch (error) {
    res.status(500).send("Error saving form data: " + error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
