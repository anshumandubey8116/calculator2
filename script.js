let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        let btnText = e.target.innerText;
        if (btnText === "AC") {
            string = "";
            input.value = string;
        } else if (btnText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else if (btnText === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }       
        } else {
            string += btnText;
            input.value = string;
        }   
    });
}