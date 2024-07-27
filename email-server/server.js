const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

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
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/submit-form", async (req, res) => {
  const { username, phoneNumber, guests } = req.body;

  if (!username || !phoneNumber || !guests) {
    return res.status(400).send("Пожалуйста, заполните все поля.");
  }

  const phoneRegex = /^\+374(?:94|93|91|77|43|98|55|33|44|49)\d{6}$/;
  if (!phoneRegex.test(phoneNumber.replace(/\D/g, ""))) {
    return res.status(400).send("Неправильный формат номера телефона.");
  }

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
      from: process.env.EMAIL_USER,
      to: "romaparonyan1415@gmail.com",
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
    res.status(500).send("Ошибка при сохранении данных: " + error.toString());
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
