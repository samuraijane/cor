var express = require('express');
var router = express.Router();
const {google} = require("googleapis");


const credentials =
{
  type: "service_account",
  project_id: "cityofrefuge-353617",
  private_key_id: "548320fdbb6fa0e46382ce60d73cb208085ed54c",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDp9r6N04jI42p0\nTaErhjy+WOPn0vYIudGchPH6Cpc4bZS6hK3CYCcOoOVIJ+PRbifx7n+PeJAffgjw\nivLFnXUTFaZatWNnM9j4FGmEib/CQ6VW9sqpBBPdEZRk7yDGEO+mBCmxasVsb5NW\n7PlgDYR4jCE59kne2rBAOWor/M021l2CLLZKC9i295brAHP46oclVL8S6BueXi+7\nRl6dYq6HDQQwJ8UGZZkqf7CbCqnULMxnFLINNQr9NK4pjEBUF9EwtTAFrrvxM4lC\nhjOr78L5uf0BYOh30fzLe0BqDtO6gVu4aw8iIv2IqKf7I/F8fFcT8VSHY0Evswsq\n4JXR8OkrAgMBAAECggEASfOXGacyRiUz4d0jw2kjzBq2tvEEmY96hNm0zo8Ia2qf\npzEG5ziTP9l1f5A0P19tOthi84ttKrcgxj91Kydw+P5P3b4V1Gob+5YgICeWOCY/\nnbRWLIRAbxD+ccTv/AsgZL5OG2kfS/4ceU5gKI89Pwkz+2kwwkMnkLVVLOA0UU9n\n5FqAACl1yV00c9/RHf5RtQUVUDaRqitLCTp9Pr8NtP2AvPfZZS0B8vOYJBcQ07BU\nBtR4JsGDFV0KwgW424rCAkhnJkVnVottZWAE27oZlrtM5OCLNr6PeN3HXrYMkqw3\nVqiN3GDBcbFUJ1YigspKP6fcNbNfan7V7oI4+BRPwQKBgQD9BxZoUtNFjLLRqq4m\nFF0jCB7oim5cvJft70GgdnuI/gm7LKyTYGI0kBurNVeRkeHFLSvwGgi1JMR5ZD/8\nJ7x0IZ8t+B8lDFlYKvwMqlu2ZGcgUCTeT32sOyWaQoK9Jsxso34HREyxUTLzNDo3\nBfN0my/JHL1FPwlAam8VszwSywKBgQDstlPU5YsHhQooaZUJ41LN+F+EobZjiIx+\nBjtC42+TUypj0A0wbLphFN22CW5F43EoIlYEQtzsbn1tix843+bIJ4/9i9eq0OWP\n4boZalCFI7qApXOmgoWyA+fBzlpa9VOmaseUOCr6b9pgvtPB5CeDkuRrzCKNpRPR\n7XZdGv7XIQKBgQDTmtHKfTniuD/zyGHLxsv9OBVhNCQHulD001p2759wecN5nWrV\n9Y0rmDkLfZi2TOIbHCPasGsH0q/dNVGtdy3LkTKmJxMk0KcHbStNDEuWxXDZPS0Y\nHjJjjzNrRqQ/u+rKEBCd0yiwQc/yRINK8NchdYcJEdfXyVfbXyd3ZmWe8QKBgQCs\nAkXis7aWjUd3XFnP6J94Sp7mWziVFVm6Dj8r+OdQMCPiigG7iZbaCvadXDcElCTb\nHDBTQl8Vc6izXGAgzRr/oTgR73eVidz28/lulIHUbcUNzKzAd6I9XHchrxibdiAG\nExvaCgK5H2SZ3rEz+N35z1krOBh3w1gmuR7Ew2Qh4QKBgADu7COOws76u6AHshGJ\n4zMepgMCFF6KCUmPxYfVWJ22Hkj745WhsRUs9Pp/vl2tay22M2mSdhqHtl1zzEfE\nfMOyccwF5qkkdbA2/AvTa9LTErMB8/zqtV5K1cqAaxUi3YEIbryYq5hvDT/afh/i\nG5nQho9BU5FqAeFFdrlyf6Of\n-----END PRIVATE KEY-----\n",
  client_email: "cityofrefuge@cityofrefuge-353617.iam.gserviceaccount.com",
  client_id: "101354345613039767969",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/cityofrefuge%40cityofrefuge-353617.iam.gserviceaccount.com"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/google', async function(req, res, next) {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  console.log(auth);
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
