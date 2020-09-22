function save_options(e) {
  e.preventDefault();
  const number = document.getElementById("number").value;
  chrome.storage.sync.set(
    {
      number: number,
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

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      number: "0123456789",
    },
    function (items) {
      document.getElementById("number").value = items.number;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("submit").addEventListener("click", save_options);
