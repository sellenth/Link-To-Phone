let sendMail = document.getElementById("sendMail");

sendMail.onclick = function (element) {
  chrome.storage.sync.get(["number", "carrier"], function (data) {
    if (data.number === undefined) {
      alert(
        'Please set your default number by right clicking this extension\'s icon and clicking on "Options"'
      );
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const dataBodyParams = new URLSearchParams({
          Body: tabs[0].url,
          To: `+1${data.number}`,
          From: "+12184408025",
        });
        postRequest(dataBodyParams.toString());
      });
    }
  });
};

function postRequest(dataString) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    "https://api.twilio.com/2010-04-01/Accounts/AC94358281b90873e68cfe2366285473d3/Messages"
  );
  xhr.setRequestHeader(
    "Authorization",
    "Basic U0syZWQwZjhmYzRlYjM5YmJkN2E1NDE5ZTA3ZWE1YWJjOTozVmszRXV4VG1IcGRzYVdwYlliZ2V3NmFHTjA0ajNDaA=="
  );
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
    }
  };
  xhr.send(dataString);
}
