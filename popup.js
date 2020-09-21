let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
});

changeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: `var pageURL = ${JSON.stringify(tabs[0].url)}`,
      },
      function () {
        chrome.tabs.executeScript(tabs[0].id, {
          file: "sendMail.js",
        });
      }
    );
  });
};
