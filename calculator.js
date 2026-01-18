const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");

    if (value === "C") {
      currentValue = "";
      screen.value = "";
      return;
    }

    if (value === "DEL") {
      currentValue = currentValue.slice(0, -1);
      screen.value = currentValue;
      return;
    }

    if (value === "=") {
      try {
        // Replace any weird operator symbols (if needed)
        let result = eval(currentValue);
        currentValue = result.toString();
        screen.value = currentValue;
      } catch (error) {
        screen.value = "Error";
        currentValue = "";
      }
      return;
    }

    // Add clicked value
    currentValue += value;
    screen.value = currentValue;
  });
});
