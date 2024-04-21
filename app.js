function retriveNumbers() {
  let percentage = document.getElementById("percentage").value;
  let personalRecord = document.getElementsByName("personal-records")[0].value;
  let personalRecordNumber = personalRecord.replace(/\D/g, "");

  calculatePercentage(percentage, personalRecordNumber);
}

function calculatePercentage(percentage, personalRecordNumber) {
  let percentageTrainingLoad = (personalRecordNumber / 100) * percentage;

  document.getElementById("training-load-text").style.display = "block";
  document.getElementById("training-load-number").innerText =
    percentageTrainingLoad + "KG";

  document.getElementById("reset-button").style.display = "block";
}
