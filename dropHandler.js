let dropArea = document.getElementById("drop_area");

["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

dropArea.addEventListener("dragleave", unhighlight, false);

dropArea.addEventListener("drop", highlightOnLoad, false);

dropArea.addEventListener("drop", validateFile, false);

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
  console.log(e);
  e.preventDefault();
}

function handleFileLoad(e) {
  console.log(e);
  dropArea.classList.add("highlightOnLoad");
}
