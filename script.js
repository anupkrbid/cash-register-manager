const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
var billAmountValue = 0;
var cashGivenValue = 0;

checkBtn.addEventListener("click", (event) => {
  message.style.display = "none";

  billAmountValue = Number(billAmount.value);
  cashGivenValue = Number(cashGiven.value);

  if (billAmountValue && billAmountValue > 0) {
    if (cashGivenValue >= billAmountValue) {
      calculateChange();
    } else {
      showMessage(
        "Cash Given Amount should be a number and greater then or equal to Bill Amount"
      );
    }
  } else {
    showMessage("Bill Amount should be a number and greater then zero");
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.textContent = msg;
}

function calculateChange() {
  var arr = ["2000", "500", "100", "20", "10", "5", "1"];
  var currentRemainder = cashGivenValue - billAmountValue;
  for (var i = 0; i < arr.length; i++) {
    noOfNotes[i].textContent = Math.trunc(currentRemainder / arr[i]);
    currentRemainder = currentRemainder % arr[i];
  }
}
