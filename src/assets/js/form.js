document.addEventListener("DOMContentLoaded", function () {
    // Toggle logic for switches (Yes/No)
    document.querySelectorAll(".mentorship-switch").forEach((input) => {
      input.addEventListener("change", function () {
        if (this.checked) {
          document.querySelectorAll(".mentorship-switch").forEach((other) => {
            if (other !== this) other.checked = false;
          });
        }
      });
    });
  
    document.querySelectorAll(".facility-switch").forEach((input) => {
      input.addEventListener("change", function () {
        if (this.checked) {
          document.querySelectorAll(".facility-switch").forEach((other) => {
            if (other !== this) other.checked = false;
          });
        }
      });
    });
  });
  
  function toggleExclusive(checkedId, uncheckedId) {
    let checkedElement = document.getElementById(checkedId);
    let uncheckedElement = document.getElementById(uncheckedId);
  
    if (checkedElement.checked) {
      uncheckedElement.checked = false;
    }
  }
  
  function updateProgress() {
    let sections = ["section1", "section2", "section3", "section4"];
    let completedSections = 0;
  
    sections.forEach((section) => {
      let inputs = document.querySelectorAll(
        #${section} input, #${section} textarea, #${section} select
      );
      let isSectionFilled = true; // Assume section is filled
  
      inputs.forEach((input) => {
        if (input.type === "checkbox" || input.type === "radio") {
          if (
            !document.querySelector(
              #${section} input[type="checkbox"]:checked
            ) &&
            !document.querySelector(#${section} input[type="radio"]:checked)
          ) {
            isSectionFilled = false; // If no checkbox/radio is checked, section is incomplete
          }
        } else if (input.value.trim() === "") {
          isSectionFilled = false; // If any text field is empty, section is incomplete
        }
      });
  
      if (isSectionFilled) {
        completedSections++;
      }
    });
  
    let progress = (completedSections / sections.length) * 100;
    let progressBar = document.getElementById("progress-bar");
    progressBar.style.width = progress + "%";
    progressBar.setAttribute("aria-valuenow", progress);
  
    // Keep progress bar white
    progressBar.style.backgroundColor = "white";
  }
  
  // Attach event listeners to all input fields to track progress
  document.querySelectorAll("input, textarea, select").forEach((input) => {
    input.addEventListener("input", updateProgress);
  });