const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

const EMAIL_USER = "rparonyan00@gmail.com";
const EMAIL_PASS = "ualj sfak wkqe yesj";

const CURRENT_GUESTS_FILE_PATH = path.join(__dirname, "current_guests.txt");
const TOTAL_GUESTS_FILE_PATH = path.join(__dirname, "total_guests.txt");

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return parseInt(data, 10) || 0;
  } catch (err) {
    return 0;
  }
};

const writeFile = (filePath, data) => {
  fs.writeFileSync(filePath, data.toString(), "utf8");
};

app.post("/submit-form", async (req, res) => {
  const { username, phoneNumber, guests } = req.body;

  if (!username || !phoneNumber || !guests) {
    console.log("Ստուգեք. ոչ բոլոր դաշտերն են լրացված");
    return res.status(400).send("Խնդրում ենք լրացնել բոլոր դաշտերը:");
  }

  const currentGuests = parseInt(guests, 10);
  const totalGuests = readFile(TOTAL_GUESTS_FILE_PATH);
  const updatedTotalGuests = totalGuests + currentGuests;
  writeFile(TOTAL_GUESTS_FILE_PATH, updatedTotalGuests);

  writeFile(CURRENT_GUESTS_FILE_PATH, currentGuests);

  const mailOptions = {
    from: EMAIL_USER,
    to: "romaparonyan14@gmail.com",
    subject: `Դուք ունեք ևս ${currentGuests} հյուրեր։ (Ընդանուր հյուրերի քանակը։ ${updatedTotalGuests})`,
    text: `Անուն: ${username}\n 
           Հեռախոսահամար: ${phoneNumber}\n 
           Անձնակազմ: ${guests}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Ошибка при отправке почты:", error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
