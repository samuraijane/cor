var express = require('express');
var router = express.Router();
const {google} = require("googleapis");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/google', async function(req, res, next) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "sheets-credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

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
        ["shrek", "shrekRow"],
      ],

    }
  })
  res.send("posted");
})

module.exports = router;
