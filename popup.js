let sendSMS = document.getElementById("sendSMS");

sendSMS.onclick = function () {
  chrome.storage.sync.get(["phoneNumber", "password"], function ({phoneNumber, password}) {
    if (!phoneNumber || !password) {
      alert(
        'Please set your user phone number and password by right clicking this extension\'s ICON (the one in the toolbar, not the big green button) and clicking on "Options"'
      );
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber: `+1${phoneNumber}`, password: password, msgContent: tabs[0].url })
        };
        fetch('https://www.link-to-phone.com/outgoingSMS', requestOptions).then(response => {console.log(response)})
      });
    }
  });
};