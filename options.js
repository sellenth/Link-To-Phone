function save_options(e) {
  e.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value
  const password = document.getElementById("password").value;
  chrome.storage.sync.set(
    {
      phoneNumber: phoneNumber,
      password: password,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 1500);
    }
  );
}

document.getElementById("phoneNumber").addEventListener("keypress", handlePhoneChange);

function handlePhoneChange() {
  const inputField = document.getElementById("phoneNumber");
  inputField.value = formatPhoneNumber(inputField.value);
}

function formatPhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.replace(/[^\d]/g, "")
  phoneNumber = phoneNumber.substr(0, 9);
  if (phoneNumber.length >= 6) {
    return `(${phoneNumber.substr(0, 3)}) ${phoneNumber.substr(3, 3)}-${phoneNumber.substr(6)}`
  }
  else if (phoneNumber.length >= 3) {
    return `(${phoneNumber.substr(0, 3)}) ${phoneNumber.substr(3)}`
  } else {
    return `${phoneNumber}`
  }
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      phoneNumber: "",
      password: "",
    },
    function (items) {
      document.getElementById("phoneNumber").value = items.phoneNumber;
      document.getElementById("password").value = items.password;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
