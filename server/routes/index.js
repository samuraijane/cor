var express = require('express');
var router = express.Router();
const {google} = require("googleapis");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/google', async function(req, res, next) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "sheets-credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Client instance auth
  const client = await auth.getClient();
  
  // Google Sheet API instance
  const googleSheets = google.sheets({ version: "v4", auth: client});

  // Get sheets data

  const spreadsheetId= "1bM7_YyERZx4iKOefjKD3wqXgNWiA9pssUcy-bqi7NWM";

  const data = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  })

  const getRows = await googleSheets.spreadsheets.values.get({

    auth,
    spreadsheetId,
    range: "Sheet1"
  })


  res.send(getRows.data);
})

module.exports = router;
