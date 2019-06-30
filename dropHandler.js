let dropArea = document.getElementById("drop_area");
let dropAreaInput = document.getElementById("dropZoneInput");

// Warning. Drag event drop doesn't work if dragenter and dragover is fireing
["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropArea.addEventListener("dragover", highlight, false);

dropArea.addEventListener("dragleave", unhighlight, false);

dropArea.addEventListener("drop", highlightOnLoad, false);

dropArea.addEventListener("drop", dropHandler, false);

dropAreaInput.addEventListener("input", handleFileLoad, false);

function highlightOnLoad(e) {
  dropArea.classList.add("highlightOnLoad");
}

function highlight(e) {
  dropArea.classList.add("highlight");
}
function unhighlight(e) {
  dropArea.classList.remove("highlight");
}

function dropHandler(e) {
  console.log(e.dataTransfer.files);
  validateFileLoad(e.dataTransfer.files);
  e.preventDefault();
}

function handleFileLoad(e) {
  console.log(e.target.files, " Handle worder is working");
  e.preventDefault();
  validateFileLoad(e.target.files);
  dropArea.classList.add("highlightOnLoad");
  insertCookie();
}
