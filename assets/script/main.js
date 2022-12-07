function getInput() {
  let input = document.querySelectorAll("input");
  let feedback = document.getElementById("feedback");
  let value = input[0].value;
  if (value != "") {
    document.getElementById("form").setAttribute("style", "display: none");

    let element = `
<div id="borderBox">
                <i id="favi" class="fa-solid fa-check fa-2xl"></i><div id="feedback">Data successfuly acquired !</div>
            </div>

    <button id="send-again" class="submit"
 type="submit" name="send-again" onclick="showForm()">
  SEND NEW CONTACT INFO
</button>
`;
    document.querySelector("#texForm").innerHTML = element;

    feedback.innerText = "Dati inviati!";
    for (let i = 0; i < input.length; i++) {
      value = input[i].value;

      feedback.innerText += " " + value;
    }
  }
}

function showForm() {
  document.getElementById("form").setAttribute("style", "");
  let element = document.getElementById("send-again");
  element.remove();
  element = document.getElementById("borderBox");
  element.remove();
}
