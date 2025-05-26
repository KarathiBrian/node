
let unirest = require('unirest');
let req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
.headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 6JzyuhmGQSD97x5uNWnCQf1Oautk'
})
.send(JSON.stringify({
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjUwNTIxMTU1ODEz",
    "Timestamp": "20250521155813",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": 1,
    "PartyA": 254717889879,
    "PartyB": 174379,
    "PhoneNumber": 254717889879,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  }))
.end(res => {
    if (res.error) throw new Error(res.error);
    console.log(res.raw_body);
});