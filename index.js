import request from "request";

/*
  options = {
  authkey : Your athenticate key , // NOTE: It's better if you put your auth key in config file.
  number : Mobile number on which you want to send sms,
  message : message string,
  senderid : sender ID provided by MSG91, // NOTE: your senderID also should be in config file.
  route : route value,
  dialcode : dial code,
  unicode : if your sms contains local language send 1 other wise 0
}
*/
// we will take unicode default 0 in case if you don't want to send message in local language, if you want to send message in local language you must pass the unicode value as 1.

export const sendSms = (options) => {
  const {authkey,number,message,senderID,route,dialCode,unicode = 0} = options;
  return new Promise((resolve, reject) => {
    const url = `http://api.msg91.com/api/sendhttp.php?authkey=authkey=${authkey}&mobiles=${number}&message=${message}&sender=${senderID}&route=${route}&country=${dialCode}&unicode=${unicode}`;
    //encoding the url, in case of local language you can only send up to 700 character long message due to header size but for english character you can send up to 3k+ character long message.
    var encodeurl=encodeURI(url);
    request(encodeurl, function (err, response, body) {
      if(err){
        console.log(err);
        reject(err);
        return;
      }
      resolve(body);
    });
  });
}
