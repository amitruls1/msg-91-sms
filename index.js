const rp = require("request-promise");

class Msg91 {
  constructor(body) {
    this.body = body;
  }
  async sendSms(next) {
    const options = {
      uri: `https://api.msg91.com/api/v5/flow/`,
      method: "post",
      headers: {
        "content-type": "application/json",
        "authkey": this.body.authKey
      },
      body: JSON.stringify(this.body.data)
    };
    rp(options).then(resp => {
      next(JSON.parse(resp));
    }).catch(e => {
      throw Error(e);
    });
  }
}

module.exports = Msg91;