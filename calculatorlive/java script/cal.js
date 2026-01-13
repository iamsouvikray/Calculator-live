let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".num-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        // CLEAR (C)
        if (value === "C") {
            display.innerText = "";
            return;
        }

        // DELETE (X)
        if (value === "X") {
            display.innerText = display.innerText.slice(0, -1);
            return;
        }

        // INVERSE (1/x)
        if (value === "1/x") {
            if (display.innerText === "" || display.innerText === "0") {
                display.innerText = "Error";
                return;
            }
            display.innerText = 1 / Number(display.innerText);
            return;
        }

        // PERCENTAGE (%)
        if (value === "%") {
            if (display.innerText === "") return;
            display.innerText = Number(display.innerText) / 100;
            return;
        }

        // EQUAL (=)
        if (value === "=") {

            //  NEW CONDITION → No value, show alert
            if (display.innerText.trim() === "") {
                alert("Please put value");
                return;
            }

            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
            }
            return;
        }

        // NORMAL INPUT
        display.innerText += value;
    });
});
