Hey guys,

This package is use to send sms via msg91.

after the latest update from Msg91, they have enable the flow style message.

In flow style message, you have to save the template that is static part of the message on their portal and do some changes in your api. I have to change in my own project too, so i created a simple helpful class for you guys just to save your time.

install this package via

`npm install -S sms-msg91`;

```
-S means --save / -D means --save-dev
```

then in your file require this class by

```
const msg91 = require("sms-msg91");
```

I have handle both (single message + bulk message).

To send single message you need to create an object like this

```
const obj = {
  "mobiles" : "919XXXXXXXXX", // mobile no on which sms will be send
  "flow_id" : "EnterflowId", // template id provided by msg91
  "VAR1" : "Variable", // dynamic variable
  "VAR2" : "Variable2" // dynamic variable
}
const smsObject = {
  data: obj,
  authKey: XXXXXX // your auth key
}
const sms = new msg91(smsObject);
sms.sendSms((resp) => {
  ...do something with resp... //resp  = { "message": "5e1e93cad6fc054d8e759a5b", "type": "success" }
})
```
Count of dynamic variable will be depend on your message, how many dynamic variable you have added while registering the sms template.

For sending bulk sms

```
const obj = {
  "flow_id":"EnterflowID",
  "sender" : "EnterSenderID",
  "recipients" : [
    {
      "mobiles":"919XXXXXXXXX",
      "VAR1":"VALUE 1",
      "VAR2" : "VALUE 2"
    },
    {
      "mobiles":"9189XXXXXXXX",
      "VAR1":"VALUE 1",
      "VAR2" : "VALUE 2"
		}
  ]
}
const smsObject = {
  data: obj,
  authKey: XXXXX // your auth key
}
const sms = new msg91(smsObject);
sms.sendSms((resp) => {
  ...do something with resp... //resp  = { "message": "5e1e93cad6fc054d8e759a5b", "type": "success" }
})
```