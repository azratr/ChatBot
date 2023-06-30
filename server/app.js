require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const {Configuration , OpenAIApi} = require('openai');
const bodyParser = require("body-parser");

const PORT = 3001;

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);
app.post("/find-complexity", async ( req,res)=>{
  try {
    const response = await openai.createCompletion({
      model : "text-davinci-003",
      prompt: `
              const example = (arr)=>{
                arr.map((item)=>{
                  console.log(item2);
                })
              };

              The time complexity of this function is
              ###
             `,
      max_tokens: 64,
      temperature:0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],

        });


    return res.status(200).json({
      success : true,
      data: response.data.choices[0].text
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
      ? error.response.data
      : "There was an issue in the server",
    })
  }
})



//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.get("/", (req, res) => {
  res.status(200).json("otp is sent");
});


app.listen(PORT, () => {
  console.log(`Server start at Port No : ${PORT}`);
});
