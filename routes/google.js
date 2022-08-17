var express = require('express');
var router = express.Router();
const {google} = require("googleapis");
require('dotenv').config();

const credentials = 
{
    type: process.env.VAR1,
    project_id: process.env.VAR2,
    private_key_id: process.env.VAR3,
    private_key: process.env.VAR4,
    client_email: process.env.VAR5,
    client_id: process.env.VAR6,
    auth_uri: process.env.VAR7,
    token_uri: process.env.VAR8,
    auth_provider_x509_cert_url: process.env.VAR9,
    client_x509_cert_url: process.env.VAR10,
}


router.post('/google', async function(req, res, next) {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  // console.log(auth);
  // Client instance auth
  const client = await auth.getClient();

  const rowValues = "Mentee";
  let spreadsheetId= "1bM7_YyERZx4iKOefjKD3wqXgNWiA9pssUcy-bqi7NWM";

  // if(req.value.role == "Mentor")
  if(rowValues == "Mentor")
  {
    spreadsheetId = "1KjFWSbpAddTq0qgucoqZPZ6sPpWFo4csAjkG3Xl2c-I" 
  } 
  // else if(req.value.role == "Mentee")
  else if(rowValues == "Mentee")
  {
    spreadsheetId = "1bM7_YyERZx4iKOefjKD3wqXgNWiA9pssUcy-bqi7NWM" 
  }
  
  // Google Sheet API instance
  const googleSheets = google.sheets({ version: "v4", auth: client});

  // Get sheets data

  // const data = await googleSheets.spreadsheets.get({
  // })

  // const getRows = await googleSheets.spreadsheets.values.get({
  // })

  // Write rows to spreadsheet
  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:B",
    valueInputOption: "USER_ENTERED",
    resource: {

      values: [
        //req.body
        // ["Test20", "test29"],
        ["Jack", "Skiles", "Bob"],
      ],

    }
  })
  res.send("posted");
})

module.exports = router;
