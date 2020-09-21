function createRecipientString(recipient, carrier) {
  const carriers = {
    att: "txt.att.net",
    tmobile: "tmomail.net",
    verizon: "vtext.com",
    sprint: "messaging.sprintpcs.com",
    xfinity: "vtext.com",
    virgin: "vmobl.com",
    tracfone: "mmst5.tracfone.com",
    simple: "smtext.com",
    mint: "mailmymobile.net",
    red: "vtext.com",
    metro: "mymetropcs.com",
    boost: "sms.myboostmobile.com",
    cricket: "sms.cricketwireless.net",
    republic: "text.republicwireless.com",
    fi: "msg.fi.google.com",
    uscellular: "email.uscc.net",
    ting: "message.ting.com",
    consumer: "mailmymobile.net",
    cspire: "cspire1.com",
    page: "vtext.com",
  };

  return `${recipient}@${carriers[carrier]}`;
}
function createJSONbody(link, recipient, carrier) {
  const serviceID = "service_duz5mft";
  const templateID = "template_rn6ecen";
  const userID = "user_Kzks6w8HDt5PGfRrKZqHl";

  return JSON.stringify({
    service_id: serviceID,
    template_id: templateID,
    user_id: userID,
    template_params: {
      the_link: link,
      the_recipient: createRecipientString(recipient, carrier),
    },
  });
}

console.log(createJSONbody(pageURL, "5415880757", "verizon"));
/*
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.emailjs.com/api/v1.0/email/send?", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    console.log(xhr.responseText);
  }
};
xhr.send(createJSONbody("www.halo.com", "5415880757", "verizon"));
*/
