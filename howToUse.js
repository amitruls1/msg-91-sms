import {sendSms} from "./index.js";

const options = {
  authkey : `your auth key`,
  number : `mobile number`,
  message : `message string`,
  senderID : `sender ID `,
  dialCode : `maybe +91`,
  route : `which type of message you want to send`,
  unicode : `1 - if you want to send local language sms and 0 if don't.`
}
sendSms(options).then(requestID=>{
  console.log(requestID);
}).catch(err=>{
  console.log(`do whatever you want`);
})
