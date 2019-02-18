Hey guys,

This package is use to send sms via msg91.

all you need to create an object of some data such as

const options = {
  authkey : `your auth key`,
  number : `mobile number`,
  message : `message string`,
  senderID : `sender ID `,
  dialCode : `maybe +91`,
  route : `which type of message you want to send`,
  unicode : `1 - if you want to send local language sms and 0 if don't.`
}

and call the promise function by importing this in your file.

import {sendSms} from "sendSms";

sendSms(options).then(requestID=>{
  // here you will get requestID if message send successfully
  console.log(requestID);
}).catch(err=>{
  // this will call in case of any type of error.
  console.log(`do whatever you want`);
})
